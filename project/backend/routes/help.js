const express = require('express');
const router = express.Router();
const helpController = require('../controllers/helpController');

router.post('/submit', helpController.createHelpRequest);

module.exports = router;