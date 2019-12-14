const express = require('express');
const router = express.Router();

//controllers
const { createProduct } = require('../controllers/Products');

//routes
router.route('/').post(createProduct);

module.exports = router;
