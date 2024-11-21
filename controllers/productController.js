//Importar base de datos
const db = require('../database/models/Product');
//Importar operadores
const Product = db.Product;

const productController = {
    index: (req, res) => {
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
        const { imagen, nombre, descripcion } = req.body;
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
        // let qs = req.query.//falta saber el nombre
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