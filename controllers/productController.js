//Importar base de datos
const db = require('../database/models/Product');
//Importar operadores
const Product = db.Product;

const productController = {
    list: (req, res) => {
        db.Product.findAll()
        .then(function (result) {
            return res.send(result)
        })
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
        let id = req.params.id

        db.Product.findByPk(id)
        .then(function(result) {
            return res.send(result)
        })
        .catch(function(err) {
            return console.log(err);
        })
    },
}

module.exports = productController;