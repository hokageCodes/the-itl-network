const User = require('../models/User');
const StudentVerification = require('../models/StudentVerification');



// PATCH /api/admin/users/:id/role
exports.updateUserRole = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;

  if (!['admin', 'mentor', 'mentee', 'member'].includes(role)) {
    return res.status(400).json({ message: 'Invalid role' });
  }

  const user = await User.findByIdAndUpdate(    
    id,
    { role },
    { new: true, runValidators: true }
  ).select('-password');

  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json({ message: 'Role updated', user });
};

// PATCH /api/admin/users/:id/toggle
exports.toggleUserActive = async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);
  if (!user) return res.status(404).json({ message: 'User not found' });

  user.isActive = !user.isActive;
  await user.save();

  res.json({ message: `User ${user.isActive ? 'activated' : 'deactivated'}`, user });
};


// GET /api/admin/users?role=mentor&available=true
exports.listUsers = async (req, res) => {
  try {
    const { role, available } = req.query;
    const filter = {};

    if (role) filter.role = role;
    if (available !== undefined) filter.available = available === 'true';

    const users = await User.find(filter).select('-password').lean();
    res.json({ count: users.length, users });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};


exports.listVerifications = async (req, res) => {
  try {
    const { status } = req.query;
    const filter = {};
    if (status) filter.status = status; // optional filter: pending / approved / rejected

    const verifications = await StudentVerification.find(filter)
      .populate('user', 'firstName lastName email role membershipStatus') // basic user info
      .populate('reviewedBy', 'firstName lastName email role') // admin info
      .sort({ createdAt: -1 });

    res.json({ count: verifications.length, verifications });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// PATCH /api/admin/users/:id/role
exports.updateUserRole = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;

  if (!['admin', 'mentor', 'mentee', 'member'].includes(role)) {
    return res.status(400).json({ message: 'Invalid role' });
  }

  const user = await User.findByIdAndUpdate(
    id,
    { role },
    { new: true, runValidators: true }
  ).select('-password');

  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json({ message: 'Role updated', user });
};

// PATCH /api/admin/users/:id/toggle
exports.toggleUserActive = async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);
  if (!user) return res.status(404).json({ message: 'User not found' });

  user.isActive = !user.isActive;
  await user.save();

  res.json({ message: `User ${user.isActive ? 'activated' : 'deactivated'}`, user });
};


// GET /api/admin/users?role=mentor&available=true
exports.listUsers = async (req, res) => {
  try {
    const { role, available } = req.query;
    const filter = {};

    if (role) filter.role = role;
    if (available !== undefined) filter.available = available === 'true';

    const users = await User.find(filter).select('-password').lean();
    res.json({ count: users.length, users });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};


exports.listVerifications = async (req, res) => {
  try {
    const { status } = req.query;
    const filter = {};
    if (status) filter.status = status; // optional filter: pending / approved / rejected

    const verifications = await StudentVerification.find(filter)
      .populate('user', 'firstName lastName email role membershipStatus') // basic user info
      .populate('reviewedBy', 'firstName lastName email role') // admin info
      .sort({ createdAt: -1 });

    res.json({ count: verifications.length, verifications });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};


exports.assignMentor = async (req, res) => {
  const { menteeId, mentorId } = req.body;

  const mentee = await MenteeProfile.findById(menteeId);
  const mentor = await MentorProfile.findById(mentorId);

  if (!mentee || !mentor) {
    return res.status(404).json({ message: 'Mentee or Mentor not found' });
  }
  if (mentee.assignedMentor) {
    return res.status(400).json({ message: 'Mentee already has a mentor' });
  }

  // Link them
  mentee.assignedMentor = mentor._id;
  mentee.status = 'active';
  await mentee.save();

  mentor.mentees.push(mentee._id);
  await mentor.save();

  res.json({ message: 'Mentor assigned', mentee, mentor });
};

// PATCH /api/admin/unassign
exports.unassignMentor = async (req, res) => {
  const { menteeId } = req.body;

  const mentee = await MenteeProfile.findById(menteeId);
  if (!mentee || !mentee.assignedMentor) {
    return res.status(404).json({ message: 'Mentee not assigned' });
  }

  const mentor = await MentorProfile.findById(mentee.assignedMentor);

  mentee.assignedMentor = null;
  mentee.status = 'pending';
  await mentee.save();

  if (mentor) {
    mentor.mentees = mentor.mentees.filter(
      id => id.toString() !== mentee._id.toString()
    );
    await mentor.save();
  }

  res.json({ message: 'Mentor unassigned', mentee });
};


// DELETE /api/admin/users/:id
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findByIdAndDelete(id).select('-password');
  if (!user) return res.status(404).json({ message: 'User not found' });

  res.json({ message: 'User deleted', user });
};

// DELETE /api/admin/users/:id
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findByIdAndDelete(id).select('-password');
  if (!user) return res.status(404).json({ message: 'User not found' });

  res.json({ message: 'User deleted', user });
};
