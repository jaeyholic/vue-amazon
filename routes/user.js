const express = require('express');
const router = express.Router();

//controllers
const { createUser } = require('../controllers/User');

//routes
router.route('/signup').post(createUser);

module.exports = router;
