// models/Enrollment.js
// One document per (user, language) pair — tracks which lessons are done,
// so a user can learn several languages at once, each with its own progress.
const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  languageCode: { type: String, required: true },
  completedLessonIds: { type: [String], default: [] },
  startedAt: { type: Date, default: Date.now },
  completedAt: { type: Date, default: null },
  certificateName: { type: String, default: null } // name printed on the certificate, set at completion
});

enrollmentSchema.index({ userId: 1, languageCode: 1 }, { unique: true });

module.exports = mongoose.model('Enrollment', enrollmentSchema);
