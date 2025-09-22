const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController');
const { registerValidation, loginValidation } = require('../middleware/validators/authValidator');
const validate = require('../middleware/validators/validate');

router.post('/register', registerValidation, validate, auth.register);
router.post('/verify-otp', auth.verifyOtp); // 🔹 new route
router.post('/login', loginValidation, validate, auth.login);
router.post('/forgot-password', auth.forgotPassword);
router.post('/reset-password/:token', auth.resetPassword);
router.post('/logout', auth.logout);
router.get('/refresh', auth.refresh);
router.get('/me', require('../middleware/authMiddleware'), auth.me);

module.exports = router;
