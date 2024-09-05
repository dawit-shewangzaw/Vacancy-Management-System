const userService = require('../services/userService');

const userController = {
  /**
   * Handle user creation.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  async createUser(req, res) {
    const { email, password, roleId, teamId } = req.body;
    try {
      const user = await userService.createUser(email, password, roleId, teamId);
      res.status(201).json({ user });
    } catch (error) {
      res.status(500).json({ error: 'Error creating user' });
    }
  },

  /**
   * Handle user login.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  async login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await userService.findUserByEmail(email);  // Fetch user by email
      if (!user || !(await userService.validateUserCredentials(email, password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      
      // Include user role ID in the response
      const userRole = user.roleId;
      
      res.status(200).json({
        message: 'Login successful',
        userId: user.id,         // Include user ID
        roleId: userRole        // Include user role ID
      });
    } catch (error) {
      res.status(500).json({ error: 'Error validating credentials' });
    }
  }
};

module.exports = userController;
