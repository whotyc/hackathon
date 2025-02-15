const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { isAuthenticated } = require('../utils/auth');

router.put('/update', isAuthenticated, userController.updateUser);
router.get('/me', isAuthenticated, userController.getUser);

module.exports = router;