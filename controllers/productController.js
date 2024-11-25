//Importar base de datos
const db = require('../database/models/Product');

//Importar operadores
const Product = db.Product;

const productController = {

    show: function(req, res) {
        return res.render('product-add')
    },

    /*
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
        const { imagen, nombre, descripcion } = req.body;
    },
*/
    store: (req, res) => { //hola
        let producto = req.body;

         db.Product.create(producto) //Habria que cambiar el nombre con el que va a tener mi base de datos
            .then(function(results) {
                return res.redirect('/products')
            })
            .catch(function(err) {
                console.log(err);
            })
    },

    detalle: (req, res) => {
        let id = req.params.id

        db.Product.findByPk(id)
            .then(function (result) {
                return res.send(result)
            })
            .catch(function (err) {
                return console.log(err);
            })
    },

    nueva: (req, res) => {
        let filtro1 = {
            order: [['release_date', 'DESC']],
        }

        db.Product.findAll(filtro1)
            .then(function (result) {
                return res.send(result)
            })
            .catch(function (err) {
                return console.log(err);
            })
    },

    search: (req, res) => {
        // let qs = req.query.//falta saber el nombre.
        let filtro = {
            where: [{ title: { [op.like]: `%${qs}%` } }]
        }
        db.Product.findOne(filtro)
            .then((result) => {
                return res.send(result)
            })
            .catch((err) => {
                return console.log(err);
            })
    }
}

module.exports = productController;