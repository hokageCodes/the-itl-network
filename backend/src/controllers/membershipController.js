const StudentVerification = require('../models/StudentVerification');
const User = require('../models/User');

// Upload proof (user)
exports.uploadProof = async (req, res) => {
  try {
    const { fileUrl } = req.body;

    // Check if user already has a pending submission
    const existing = await StudentVerification.findOne({
      user: req.user.id,
      status: 'pending'
    });

    if (existing) {
      return res.status(400).json({
        message: 'You already have a pending verification awaiting review.'
      });
    }

    const verification = new StudentVerification({
      user: req.user.id,
      documentUrl: fileUrl
    });
    await verification.save();

    res.status(201).json({
      message: 'Proof uploaded. Awaiting admin review.',
      verification
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};



// Admin: list verifications with filters + pagination
exports.listVerifications = async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    const filter = {};

    if (status) filter.status = status; // pending | approved | rejected

    const verifications = await StudentVerification.find(filter)
      .populate('user', 'firstName lastName email membershipStatus')
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 });

    const total = await StudentVerification.countDocuments(filter);

    res.json({
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit),
      verifications
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


// Admin: approve or reject
exports.reviewProof = async (req, res) => {
  try {
    const { id } = req.params; // verification id
    const { action } = req.body; // "approve" or "reject"

    const verification = await StudentVerification.findById(id).populate('user');
    if (!verification) return res.status(404).json({ message: 'Verification not found' });

    verification.status = action === 'approve' ? 'approved' : 'rejected';
    verification.reviewedBy = req.user.id;
    verification.reviewedAt = new Date();
    await verification.save();

    // Update user membershipStatus
    verification.user.membershipStatus = action === 'approve' ? 'active' : 'rejected';
    await verification.user.save();

    res.json({ message: `Verification ${action}d`, verification });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


// Admin: bulk approve/reject
exports.bulkReview = async (req, res) => {
  try {
    const { ids, action } = req.body; // array of verification IDs + "approve"/"reject"

    if (!Array.isArray(ids) || !ids.length) {
      return res.status(400).json({ message: 'No IDs provided' });
    }
    if (!['approve', 'reject'].includes(action)) {
      return res.status(400).json({ message: 'Invalid action' });
    }

    const verifications = await StudentVerification.find({ _id: { $in: ids } }).populate('user');
    if (!verifications.length) {
      return res.status(404).json({ message: 'No verifications found for given IDs' });
    }

    const updateOps = verifications.map(v => {
      v.status = action === 'approve' ? 'approved' : 'rejected';
      v.reviewedBy = req.user.id;
      v.reviewedAt = new Date();

      if (v.user) {
        v.user.membershipStatus = v.status;
        v.user.save();
      }

      return v.save();
    });

    await Promise.all(updateOps);

    res.json({
      message: `Bulk ${action} complete`,
      updated: verifications.map(v => ({ id: v._id, status: v.status }))
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};



// Admin: bulk delete verifications
exports.bulkDelete = async (req, res) => {
  try {
    const { ids } = req.body; // array of verification IDs

    if (!Array.isArray(ids) || !ids.length) {
      return res.status(400).json({ message: 'No IDs provided' });
    }

    const result = await StudentVerification.deleteMany({ _id: { $in: ids } });

    res.json({
      message: `Deleted ${result.deletedCount} verification(s)`,
      deletedCount: result.deletedCount
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};



// User: check status
exports.getStatus = async (req, res) => {
  const verification = await StudentVerification.findOne({ user: req.user.id });
  res.json({ status: verification?.status || 'not-submitted' });
};
