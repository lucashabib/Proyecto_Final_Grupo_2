const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.show); // Llama al método correcto
module.exports = router;
