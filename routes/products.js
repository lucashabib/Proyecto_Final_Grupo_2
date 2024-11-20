var express = require('express');
var router = express.Router();

//IMPORTAR CONTROLADOR
let productController = require('../controllers/productController');

//RUTAS PRODUCTS
router.get('/', productController.list)

router.get('/', productController.mostrarProducto);

router.post('/', productController.procesarProducto);

router.get('/:id', productController.detalle)

module.exports = router;