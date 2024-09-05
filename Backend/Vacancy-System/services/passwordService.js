const crypto = require('crypto');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const dotenv = require('dotenv');

dotenv.config();

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Generate Reset Token and Send Email
async function generateResetToken(email) {
  // Find the user by email
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error('User not found');
  }

  // Generate a 6-digit token
  const token = crypto.randomInt(100000, 999999).toString();
  console.log(`Generated Token: ${token}`); // Log the generated token

  // Set token and expiry on user
  user.resetPasswordToken = token;
  user.resetPasswordExpires = Date.now() + 3600000; // 1 hour expiry
  await user.save();

  console.log(`Saved Token: ${user.resetPasswordToken}`); // Log saved token

  // Send reset token email
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'Password Reset Request',
    text: `Your password reset code is ${token}. It expires in 1 hour.`,
  };

  await transporter.sendMail(mailOptions);
  return { message: 'Reset token sent to email' };
}

// Verify Reset Token
async function verifyResetToken(email, token) {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error('User not found');
  }
  console.log(`Stored Token: ${user.resetPasswordToken}`); // Log stored token
  console.log(`Provided Token: ${token}`); // Log provided token

  // Check if token is valid and not expired
  if (user.resetPasswordToken !== token ) {
    throw new Error('Invalid ');
  }
  if ( Date.now() > user.resetPasswordExpires) {
    throw new Error('Timeout');
  }

  return { message: 'Token is valid' };
}

// Reset Password
async function resetPassword(email, token, newPassword) {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error('User not found');
  }

  // Verify the token
  if (user.resetPasswordToken !== token || Date.now() > user.resetPasswordExpires) {
    throw new Error('Invalid or expired token');
  }

  // Hash the new password
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  // Update user password
  user.password = hashedPassword;
  user.resetPasswordToken = null; // Clear reset token
  user.resetPasswordExpires = null; // Clear expiry
  await user.save();

  return { message: 'Password has been updated successfully' };
}

module.exports = {
  generateResetToken,
  verifyResetToken,
  resetPassword,
};
