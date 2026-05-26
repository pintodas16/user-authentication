const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');

// ─── Helper: generate JWT ─────────────────────────────────────────────────────
const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });

// ─── @route  POST /api/auth/signup ───────────────────────────────────────────
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }
    console.log("existingUser check passed, creating new user...",existingUser    
    );

    const user = await User.create({ name, email, password });
    console.log('New user created:', user);
    const token = generateToken(user._id);
    console.log('Generated JWT:', token);

    res.status(201).json({
      message: 'Account created successfully',
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ─── @route  POST /api/auth/signin ───────────────────────────────────────────
const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Explicitly select password (it has select:false on the schema)
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = generateToken(user._id);

    res.json({
      message: 'Signed in successfully',
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ─── @route  GET /api/auth/me ─────────────────────────────────────────────────
const getMe = async (req, res) => {
  res.json({ user: req.user });
};

// ─── @route  POST /api/auth/forgot-password ──────────────────────────────────
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      // Don't reveal if the email exists or not
      return res.json({ message: 'If that email exists, a reset link has been sent' });
    }

    const resetToken = user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false });

    // Build reset URL — point to your frontend reset page
    const resetUrl = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;

    const html = `
      <h2>Password Reset Request</h2>
      <p>You requested a password reset. Click the link below to set a new password:</p>
      <a href="${resetUrl}" style="
        display:inline-block;padding:12px 24px;background:#4F46E5;
        color:#fff;text-decoration:none;border-radius:6px;margin:16px 0">
        Reset Password
      </a>
      <p>This link expires in <strong>15 minutes</strong>.</p>
      <p>If you didn't request this, you can safely ignore this email.</p>
    `;

    await sendEmail({
      to: user.email,
      subject: 'Password Reset Request',
      html,
    });

    res.json({ message: 'If that email exists, a reset link has been sent' });
  } catch (error) {
    // Clean up tokens if email fails
    if (req.user) {
      req.user.resetPasswordToken = undefined;
      req.user.resetPasswordExpire = undefined;
      await req.user.save({ validateBeforeSave: false });
    }
    res.status(500).json({ message: 'Email could not be sent' });
  }
};

// ─── @route  POST /api/auth/reset-password/:token ────────────────────────────
const resetPassword = async (req, res) => {
  try {
    const { password } = req.body;
    if (!password || password.length < 6) {
      return res
        .status(400)
        .json({ message: 'Password must be at least 6 characters' });
    }

    // Hash the raw URL token to compare with the stored hash
    const hashedToken = crypto
      .createHash('sha256')
      .update(req.params.token)
      .digest('hex');

    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpire: { $gt: Date.now() }, // not expired
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired reset token' });
    }

    // Set the new password and clear reset fields
    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    const token = generateToken(user._id);

    res.json({
      message: 'Password reset successful',
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { signup, signin, getMe, forgotPassword, resetPassword };