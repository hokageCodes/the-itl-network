// src/controllers/mentorController.js
const MentorProfile = require('../models/MentorProfile');

// Apply as mentor (logged in users)
exports.apply = async (req, res) => {
  const { bio, expertise, availability, headshotUrl, province } = req.body;

  if (!bio || !expertise || !availability) {
    return res.status(400).json({ message: 'Bio, expertise, and availability are required' });
  }

  const exists = await MentorProfile.findOne({ user: req.user.id });
  if (exists) return res.status(400).json({ message: 'You already applied as a mentor' });

  const mentor = new MentorProfile({
    user: req.user.id,
    email: req.user.email,
    name: `${req.user.firstName} ${req.user.lastName}`,
    bio,
    expertise,
    availability,
    headshotUrl,
    province
  });

  await mentor.save();
  res.status(201).json({ message: 'Application submitted', mentor });
};

// Get my mentor profile
exports.myApplication = async (req, res) => {
  const mentor = await MentorProfile.findOne({ user: req.user.id }).populate('user', 'username email');
  if (!mentor) return res.status(404).json({ message: 'No application found' });
  res.json(mentor);
};

// Admin: list all mentor applications
exports.listAll = async (req, res) => {
  const mentors = await MentorProfile.find().populate('user', 'username email role');
  res.json({ count: mentors.length, mentors });
};

// Admin: approve/reject
exports.updateStatus = async (req, res) => {
  const { status } = req.body;
  if (!['approved', 'rejected'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status' });
  }

  const mentor = await MentorProfile.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  ).populate('user', 'username email');

  if (!mentor) return res.status(404).json({ message: 'Application not found' });

  res.json({ message: `Mentor ${status}`, mentor });
};

// Public: list mentors
exports.listPublic = async (req, res) => {
  const mentors = await MentorProfile.find({ status: 'approved', available: true })
    .select('name bio expertise availability headshotUrl province');
  res.json({ count: mentors.length, mentors });
};
