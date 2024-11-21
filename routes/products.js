var express = require('express');
var router = express.Router();

//IMPORTAR CONTROLADOR
let productController = require('../controllers/productController');

//RUTAS PRODUCTS

//router.get('/', productController.mostrarProducto);

//router.post('/', productController.procesarProducto);

router.get('/products', productController.show);
router.post('/products', productController.store);


//router.get('/detail/:id', productController.detalle);

//router.get('/new', productController.nueva);

//router.get('/search', productController.search);

module.exports = router;