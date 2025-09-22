// src/controllers/menteeController.js
const MenteeProfile = require('../models/MenteeProfile');
const User = require('../models/User');

// Apply as mentee (only members)
exports.apply = async (req, res) => {
  const { goals, needs } = req.body;

  if (!goals || !needs) {
    return res.status(400).json({ message: 'Goals and needs are required' });
  }

  // Prevent duplicate applications
  const exists = await MenteeProfile.findOne({ user: req.user.id });
  if (exists) {
    return res.status(400).json({ message: 'You already applied as a mentee' });
  }

  // ✅ Eligibility check
  const user = await User.findById(req.user.id);
  if (!user) return res.status(404).json({ message: 'User not found' });

  const eligibleStages = ['NCA Candidate', 'Articling']; // tweak as needed
  if (!eligibleStages.includes(user.licensingStage) || user.location.toLowerCase() !== 'canada') {
    return res.status(403).json({ 
      message: 'You must be internationally trained and based in Canada to apply as a mentee' 
    });
  }

  const mentee = new MenteeProfile({
    user: req.user.id,
    goals,
    needs
  });

  await mentee.save();

  res.status(201).json({ message: 'Application submitted', mentee });
};


// Get my mentee application
exports.myApplication = async (req, res) => {
  const mentee = await MenteeProfile.findOne({ user: req.user.id }).populate('user', 'username email firstName lastName');
  if (!mentee) return res.status(404).json({ message: 'No application found' });
  res.json(mentee);
};

// Admin: list all mentee applications
exports.listAll = async (req, res) => {
  const mentees = await MenteeProfile.find().populate('user', 'username email firstName lastName role');
  res.json({ count: mentees.length, mentees });
};

// Admin: approve/reject mentee application
exports.updateStatus = async (req, res) => {
  const { status } = req.body; // "approved" | "rejected"
  if (!['approved', 'rejected'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status' });
  }

  const mentee = await MenteeProfile.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  ).populate('user', 'username email firstName lastName');

  if (!mentee) return res.status(404).json({ message: 'Application not found' });

  res.json({ message: `Mentee ${status}`, mentee });
};
