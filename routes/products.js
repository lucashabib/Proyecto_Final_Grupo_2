var express = require('express');
var router = express.Router();

//IMPORTAR CONTROLADOR

//RUTAS PRODUCTS
router.get('/', function(req, res) {
    return  res.send('TODOS LOS PRODUCTOS')
})

//router.get('/', productController.list)

//router.get('/:id', productController.detalle)

module.exports = router;