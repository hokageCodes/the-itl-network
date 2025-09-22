const Application = require('../models/Application');
const User = require('../models/User');

exports.listApplications = async (req, res) => {
  try {
    const applications = await Application.find()
      .populate('mentee', 'firstName lastName email')
      .populate('mentor', 'firstName lastName email');

    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};


exports.updateApplicationStatus = async (req, res) => {
  const { id } = req.params;
  const { status, notes } = req.body;

  if (!['pending', 'approved', 'rejected'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status' });
  }

  const app = await Application.findByIdAndUpdate(
    id,
    { status, notes },
    { new: true }
  )
    .populate('mentee', 'name email')
    .populate('mentor', 'name email');

  if (!app) return res.status(404).json({ message: 'Application not found' });

  // 👇 Put the snippet here
  if (status === 'approved') {
    const MenteeProfile = require('../models/MenteeProfile');

    // Activate mentee profile
    const menteeProfile = await MenteeProfile.findOne({ user: app.mentee });
    if (menteeProfile) {
      menteeProfile.status = 'active';
      menteeProfile.programEndDate = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000); // 3 months
      menteeProfile.assignedMentor = app.mentor;
      await menteeProfile.save();
    }

    // Update mentee user role
    const menteeUser = await User.findById(app.mentee);
    if (menteeUser) {
      menteeUser.role = 'mentee';
      await menteeUser.save();
    }

    // Mark mentor unavailable
    const mentorUser = await User.findById(app.mentor);
    if (mentorUser) {
      mentorUser.available = false;
      await mentorUser.save();
    }
  }

  res.json({ message: 'Application updated', application: app });
};

// Admin: delete application
exports.deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;
    await Application.findByIdAndDelete(id);
    res.json({ message: 'Application deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};