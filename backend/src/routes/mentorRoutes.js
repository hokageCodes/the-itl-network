// src/routes/mentorRoutes.js
const express = require('express');
const router = express.Router();
const mentorCtrl = require('../controllers/mentorController');
const requireAuth = require('../middleware/authMiddleware');
const requireRole = require('../middleware/roleMiddleware');

// Member applies
router.post('/apply', requireAuth, requireRole('member'), mentorCtrl.apply);
router.get('/me', requireAuth, mentorCtrl.myApplication);

// Admin manages mentors
router.get('/', requireAuth, requireRole('admin'), mentorCtrl.listAll);
router.patch('/:id/status', requireAuth, requireRole('admin'), mentorCtrl.updateStatus);

// Public landing page
router.get('/public', mentorCtrl.listPublic);

module.exports = router;
