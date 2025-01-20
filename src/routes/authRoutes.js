const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');

const router = express.Router();

// Endpoint untuk registrasi
router.post('/register', registerUser);

// Endpoint untuk login
router.post('/login', loginUser);

module.exports = router;
