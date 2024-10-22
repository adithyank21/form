const express = require('express');
const { registerUser } = require('../controllers/userController');

const router = express.Router();

// POST request to register user
router.post('/register', registerUser);

module.exports = router;
