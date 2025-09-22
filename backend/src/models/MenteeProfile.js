// src/models/MenteeProfile.js
const mongoose = require('mongoose');

const menteeSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true, 
    unique: true 
  },
  goals: { type: String, required: true },
  needs: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['pending', 'active', 'completed', 'rejected'], 
    default: 'pending' 
  },
  programEndDate: { type: Date }, // for cron to track expiry
  assignedMentor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('MenteeProfile', menteeSchema);
