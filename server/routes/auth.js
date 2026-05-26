const express = require('express');
const router = express.Router();
const {
  signup,
  signin,
  getMe,
  forgotPassword,
  resetPassword,
} = require('../controllers/authController');
const { protect } = require('../middleware/auth');


const ctrl = require('../controllers/authController');
console.log(ctrl); // see exactly what's exported

// Public routes
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);

// Protected route (requires valid JWT)
router.get('/me', protect, getMe);

module.exports = router;


