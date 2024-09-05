const { generateResetToken, verifyResetToken, resetPassword } = require('../services/passwordService');

// Request Reset Password
/**
 * Endpoint: POST /password-reset-request
 * Description: Handles the request to initiate a password reset. Generates a reset token and sends it to the user's email.
 */
async function requestResetPassword(req, res) {
  try {
    const { email } = req.body;
    // Call the service to generate and send the reset token
    await generateResetToken(email);
    // Respond with a success message
    res.status(200).json({ message: 'Password reset token sent to email' });
  } catch (error) {
    // Respond with an error message if something goes wrong
    res.status(400).json({ error: error.message });
  }
}

// Verify Reset Code
/**
 * Endpoint: POST /verify-reset-code
 * Description: Verifies the 6-digit reset code provided by the user. Checks if the code is valid and hasn't expired.
 */
async function verifyResetCode(req, res) {
  try {
    const { email, token } = req.body;
    // Call the service to verify the reset token
    await verifyResetToken(email, token);
    // Respond with a success message if the token is valid
    res.status(200).json({ message: 'Reset token is valid' });
  } catch (error) {
    // Respond with an error message if the token is invalid or expired
    res.status(400).json({ error: error.message });
  }
}

// Reset Password
/**
 * Endpoint: POST /reset-password
 * Description: Resets the user's password after verifying the reset code. Updates the user's password in the database.
 */
async function resetPasswordController(req, res) {
  try {
    const { email, token, newPassword } = req.body;
    // Call the service to reset the user's password
    await resetPassword(email, token, newPassword);
    // Respond with a success message if the password was updated
    res.status(200).json({ message: 'Password has been reset successfully' });
  } catch (error) {
    // Respond with an error message if something goes wrong
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  requestResetPassword,
  verifyResetCode,
  resetPasswordController,
};
