const express = require('express');
const router = express.Router();
const membership = require('../controllers/membershipController');
const auth = require('../middleware/authMiddleware');
const requireRole = require('../middleware/roleMiddleware');

// User
router.post('/upload', auth, membership.uploadProof);
router.get('/status', auth, membership.getStatus);

// Admin
router.post('/:id/review', auth, requireRole('admin'), membership.reviewProof);

module.exports = router;
