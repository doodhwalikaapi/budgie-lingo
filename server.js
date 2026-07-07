// server.js — Budgie Lingo backend
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const path = require('path');

const User = require('./models/User');
const Enrollment = require('./models/Enrollment');
const { getAllLanguages, isAvailable, getLanguageName } = require('./data/languages');

const COURSES = {
  fr: require('./data/courses/fr'),
  de: require('./data/courses/de'),
  hi: require('./data/courses/hi'),
  ja: require('./data/courses/ja'),
  zh: require('./data/courses/zh')
};

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;
const SESSION_SECRET = process.env.SESSION_SECRET || 'budgie-secret-change-me';

if (!MONGO_URI) {
  console.error('Missing MONGO_URI environment variable. Set it before starting the server.');
}

mongoose.connect(MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err.message);
});

app.use(express.json());
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: MONGO_URI }),
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
}));

app.use(express.static(path.join(__dirname, 'public')));

function requireAuth(req, res, next) {
  if (!req.session.userId) return res.status(401).json({ error: 'Not logged in' });
  next();
}

// ---------------- AUTH ----------------

app.post('/api/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ error: 'All fields are required' });
    if (password.length < 6) return res.status(400).json({ error: 'Password must be at least 6 characters' });

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) return res.status(409).json({ error: 'An account with this email already exists' });

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email: email.toLowerCase(), passwordHash });

    req.session.userId = user._id.toString();
    res.json({ id: user._id, name: user.name, email: user.email });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Signup failed' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(401).json({ error: 'Invalid email or password' });

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ error: 'Invalid email or password' });

    req.session.userId = user._id.toString();
    res.json({ id: user._id, name: user.name, email: user.email });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Login failed' });
  }
});

app.post('/api/logout', (req, res) => {
  req.session.destroy(() => res.json({ ok: true }));
});

app.get('/api/me', requireAuth, async (req, res) => {
  const user = await User.findById(req.session.userId).select('name email createdAt');
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

// Delete account — this is the ONLY way credentials get removed
app.delete('/api/account', requireAuth, async (req, res) => {
  try {
    await Enrollment.deleteMany({ userId: req.session.userId });
    await User.findByIdAndDelete(req.session.userId);
    req.session.destroy(() => res.json({ ok: true }));
  } catch (err) {
    res.status(500).json({ error: 'Could not delete account' });
  }
});

// ---------------- LANGUAGES ----------------

app.get('/api/languages', requireAuth, async (req, res) => {
  res.json(getAllLanguages());
});

app.get('/api/my-languages', requireAuth, async (req, res) => {
  const enrollments = await Enrollment.find({ userId: req.session.userId });
  const result = enrollments.map(e => ({
    languageCode: e.languageCode,
    languageName: getLanguageName(e.languageCode),
    totalLessons: COURSES[e.languageCode] ? COURSES[e.languageCode].lessons.length : 0,
    completedCount: e.completedLessonIds.length,
    completedAt: e.completedAt,
    startedAt: e.startedAt
  }));
  res.json(result);
});

app.post('/api/my-languages', requireAuth, async (req, res) => {
  const { languageCode } = req.body;
  if (!isAvailable(languageCode)) return res.status(400).json({ error: 'This language isn\'t ready to learn yet' });

  try {
    let enrollment = await Enrollment.findOne({ userId: req.session.userId, languageCode });
    if (!enrollment) {
      enrollment = await Enrollment.create({ userId: req.session.userId, languageCode });
    }
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: 'Could not add language' });
  }
});

app.delete('/api/my-languages/:code', requireAuth, async (req, res) => {
  await Enrollment.deleteOne({ userId: req.session.userId, languageCode: req.params.code });
  res.json({ ok: true });
});

// ---------------- COURSES / LESSONS ----------------

app.get('/api/courses/:code', requireAuth, async (req, res) => {
  const course = COURSES[req.params.code];
  if (!course) return res.status(404).json({ error: 'Course not found' });

  const enrollment = await Enrollment.findOne({ userId: req.session.userId, languageCode: req.params.code });
  const completedLessonIds = enrollment ? enrollment.completedLessonIds : [];

  res.json({
    code: course.code,
    name: course.name,
    lessons: course.lessons.map(l => ({
      id: l.id,
      title: l.title,
      questionCount: l.questions.length,
      completed: completedLessonIds.includes(l.id)
    })),
    completedAt: enrollment ? enrollment.completedAt : null
  });
});

app.get('/api/courses/:code/lessons/:lessonId', requireAuth, async (req, res) => {
  const course = COURSES[req.params.code];
  if (!course) return res.status(404).json({ error: 'Course not found' });
  const lesson = course.lessons.find(l => l.id === req.params.lessonId);
  if (!lesson) return res.status(404).json({ error: 'Lesson not found' });
  res.json(lesson);
});

app.post('/api/courses/:code/lessons/:lessonId/complete', requireAuth, async (req, res) => {
  const course = COURSES[req.params.code];
  if (!course) return res.status(404).json({ error: 'Course not found' });
  const lesson = course.lessons.find(l => l.id === req.params.lessonId);
  if (!lesson) return res.status(404).json({ error: 'Lesson not found' });

  try {
    let enrollment = await Enrollment.findOne({ userId: req.session.userId, languageCode: req.params.code });
    if (!enrollment) {
      enrollment = await Enrollment.create({ userId: req.session.userId, languageCode: req.params.code });
    }

    if (!enrollment.completedLessonIds.includes(lesson.id)) {
      enrollment.completedLessonIds.push(lesson.id);
    }

    const allDone = course.lessons.every(l => enrollment.completedLessonIds.includes(l.id));
    let justCompleted = false;
    if (allDone && !enrollment.completedAt) {
      enrollment.completedAt = new Date();
      const user = await User.findById(req.session.userId);
      enrollment.certificateName = user.name;
      justCompleted = true;
    }

    await enrollment.save();
    res.json({ ok: true, courseCompleted: allDone, justCompleted });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not save progress' });
  }
});

// ---------------- CERTIFICATE ----------------

app.get('/api/certificate/:code', requireAuth, async (req, res) => {
  const enrollment = await Enrollment.findOne({ userId: req.session.userId, languageCode: req.params.code });
  if (!enrollment || !enrollment.completedAt) {
    return res.status(404).json({ error: 'Course not completed yet' });
  }
  res.json({
    name: enrollment.certificateName,
    languageName: getLanguageName(req.params.code),
    completedAt: enrollment.completedAt
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n🐦 Budgie Lingo is running on port ${PORT}\n`);
});
