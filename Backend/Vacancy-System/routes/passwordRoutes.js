// routes/passwordRoutes.js

const express = require('express');
const router = express.Router();

// Import the controller methods
const {
  requestResetPassword,
  verifyResetCode,
  resetPasswordController,
} = require('../controllers/passwordController');

// Route to request a password reset
router.post('/password-reset-request', requestResetPassword);

// Route to verify the reset code
router.post('/verify-reset-code', verifyResetCode);

// Route to reset the password
router.post('/reset-password', resetPasswordController);

module.exports = router;
