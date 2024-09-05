const bcrypt = require('bcrypt');
const { User } = require('../models'); // Import models correctly

const userService = {
  
  /**
   * Create a new user in the database.
   * @param {string} email - The email of the new user.
   * @param {string} password - The plain text password of the new user.
   * @param {number} roleId - The ID of the role to associate with the user.
   * @param {number} [teamId=null] - The ID of the team to associate with the user (optional).
   * @returns {Object} The created user.
   */
  async createUser(email, password, roleId, teamId = null) {
    try {
      // Hash the user's password before saving it to the database
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create and save the new user
      const user = await User.create({
        email,
        password: hashedPassword,
        roleId,
        teamId
      });

      return user;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },

  /**
   * Find a user by email.
   * @param {string} email - The email of the user to find.
   * @returns {Object|null} The found user or null if no user found.
   */
  async findUserByEmail(email) {
    try {
      const user = await User.findOne({ 
        where: { email }, 
        attributes: ['id', 'email', 'password', 'roleId'] // Include roleId
      });
      return user;
    } catch (error) {
      console.error('Error finding user by email:', error);
      throw error;
    }
  },

  /**
   * Validate a user's credentials.
   * @param {string} email - The email of the user.
   * @param {string} password - The plain text password of the user.
   * @returns {boolean} True if credentials are valid, false otherwise.
   */
  async validateUserCredentials(email, password) {
    try {
      const user = await userService.findUserByEmail(email);
      if (!user) {
        return false;
      }
      
      // Compare the provided password with the hashed password stored in the database
      const isPasswordValid = await bcrypt.compare(password, user.password);
      return isPasswordValid;
    } catch (error) {
      console.error('Error validating user credentials:', error);
      throw error;
    }
  }
};


module.exports = userService;
