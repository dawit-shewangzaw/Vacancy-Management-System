const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route for creating a user
router.post('/users', userController.createUser);

// Route for user login
router.post('/login', userController.login);

module.exports = router;
