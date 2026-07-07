// public/js/lesson.js

const params = new URLSearchParams(window.location.search);
const langCode = params.get('lang');

const lessonListView = document.getElementById('lessonListView');
const lessonPlayView = document.getElementById('lessonPlayView');
const lessonCompleteView = document.getElementById('lessonCompleteView');

if (!langCode) window.location.href = 'dashboard.html';

async function requireLogin() {
  const res = await fetch('/api/me');
  if (!res.ok) { window.location.href = 'login.html'; return null; }
  return res.json();
}

function showView(view) {
  lessonListView.style.display = 'none';
  lessonPlayView.style.display = 'none';
  lessonCompleteView.style.display = 'none';
  view.style.display = 'block';
}

async function loadLessonList() {
  const res = await fetch(`/api/courses/${langCode}`);
  if (!res.ok) { window.location.href = 'dashboard.html'; return; }
  const course = await res.json();
  document.getElementById('courseTitle').textContent = `Budgie Lingo · ${course.name}`;

  const list = document.getElementById('lessonList');
  list.innerHTML = '';
  course.lessons.forEach((lesson, idx) => {
    const row = document.createElement('div');
    row.className = `lesson-row ${lesson.completed ? 'done' : ''}`;
    row.innerHTML = `
      <div>
        <div class="lr-title">${idx + 1}. ${lesson.title}</div>
        <div class="lr-meta">${lesson.questionCount} questions</div>
      </div>
      <div class="lr-check">${lesson.completed ? '✓' : idx + 1}</div>
    `;
    row.addEventListener('click', () => playLesson(lesson.id));
    list.appendChild(row);
  });

  showView(lessonListView);
}

let currentLesson = null;
let currentIndex = 0;
let correctCount = 0;

async function playLesson(lessonId) {
  const res = await fetch(`/api/courses/${langCode}/lessons/${lessonId}`);
  currentLesson = await res.json();
  currentIndex = 0;
  correctCount = 0;
  showView(lessonPlayView);
  renderQuestion();
}

function renderQuestion() {
  const q = currentLesson.questions[currentIndex];
  const pct = Math.round((currentIndex / currentLesson.questions.length) * 100);
  document.getElementById('progressFill').style.width = `${pct}%`;

  const card = document.getElementById('questionCard');
  const shuffled = [...q.options];

  card.innerHTML = `
    <div class="question-prompt">${q.prompt}</div>
    <div class="options-grid">
      ${shuffled.map(opt => `<button class="option-btn" data-value="${encodeURIComponent(opt)}">${opt}</button>`).join('')}
    </div>
    <div class="feedback-msg" id="feedbackMsg"></div>
  `;

  card.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => handleAnswer(btn, q));
  });
}

function handleAnswer(btn, q) {
  const chosen = decodeURIComponent(btn.dataset.value);
  const allBtns = document.querySelectorAll('.option-btn');
  allBtns.forEach(b => b.disabled = true);

  const feedback = document.getElementById('feedbackMsg');

  if (chosen === q.answer) {
    btn.classList.add('correct');
    feedback.textContent = 'Correct! 🎉';
    feedback.className = 'feedback-msg correct';
    correctCount++;
  } else {
    btn.classList.add('wrong');
    feedback.textContent = `Not quite — it's "${q.answer}"`;
    feedback.className = 'feedback-msg wrong';
    allBtns.forEach(b => {
      if (decodeURIComponent(b.dataset.value) === q.answer) b.classList.add('correct');
    });
  }

  setTimeout(() => {
    currentIndex++;
    if (currentIndex < currentLesson.questions.length) {
      renderQuestion();
    } else {
      finishLesson();
    }
  }, 1100);
}

async function finishLesson() {
  document.getElementById('progressFill').style.width = '100%';
  const res = await fetch(`/api/courses/${langCode}/lessons/${currentLesson.id}/complete`, { method: 'POST' });
  const result = await res.json();

  const msg = document.getElementById('completeMsg');
  msg.textContent = `You got ${correctCount}/${currentLesson.questions.length} correct.`;

  if (result.justCompleted) {
    msg.textContent += ' You\'ve finished the whole course! 🏆';
  }

  showView(lessonCompleteView);

  document.getElementById('backToLessonsBtn').onclick = () => {
    if (result.justCompleted) {
      window.location.href = `certificate.html?lang=${langCode}`;
    } else {
      loadLessonList();
    }
  };
}

(async function init() {
  const me = await requireLogin();
  if (!me) return;
  loadLessonList();
})();
