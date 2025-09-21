// src/routes/menteeRoutes.js
const express = require('express');
const router = express.Router();
const menteeCtrl = require('../controllers/MenteeController');
const requireAuth = require('../middleware/authMiddleware');
const requireRole = require('../middleware/roleMiddleware');

// Member applies
router.post('/apply', requireAuth, requireRole('member'), menteeCtrl.apply);

// Member checks own application
router.get('/me', requireAuth, requireRole('member'), menteeCtrl.myApplication);

// Admin manages mentee applications
router.get('/', requireAuth, requireRole('admin'), menteeCtrl.listAll);
router.patch('/:id/status', requireAuth, requireRole('admin'), menteeCtrl.updateStatus);

module.exports = router;
