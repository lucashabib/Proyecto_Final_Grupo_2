//Importar base de datos
const db = require('../database/models/Product');
//Importar operadores
const Product = db.Product;

const productController = {
    list: (req, res) => {
        res.render('products/list', { Product });
    },
    mostrarProducto: (req, res) => {
        if (!req.session || !req.session.user) {
            return res.redirect('/login');
        }
        res.render('cargarProducto');
    },

    procesarProducto: (req, res) => {
        if (!req.session || !req.session.user) {
            return res.redirect('/login');
        }
        const {imagen, nombre, descripcion} = req.body;
    },

    detalle: (req, res) => {

    },
}

module.exports = productController;