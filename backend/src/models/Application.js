const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  mentee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  notes: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);
