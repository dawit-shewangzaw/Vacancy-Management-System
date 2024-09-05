// Import the necessary modules and services
const { createUser, findUserByEmail, validateUserCredentials } = require('../services/userService');

// Define a test function to run your tests
async function runTests() {
    try {
        // Test 1: Create a new user
        const newUser = await createUser('newuser@example.com', 'password123', 1, 1); // Email, Password, RoleId, TeamId
        console.log('User created:', newUser);

        // Test 2: Find a user by email
        const user = await findUserByEmail('newuser@example.com');
        console.log('User found:', user);

        // Test 3: Validate user credentials
        const isValid = await validateUserCredentials('newuser@example.com', 'password123');
        console.log('Credentials are valid:', isValid);

    } catch (error) {
        console.error('Error during testing:', error);
    }
}

// Run the test
runTests();
