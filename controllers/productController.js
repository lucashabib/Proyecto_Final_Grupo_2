//Importar base de datos
const db = require('../database/models');
//Importar operadores
const Product = db.Product;

const productController = {

    show: function (req, res) {
        return res.render('product-add')
    },


    mostrarProducto: (req, res) => {
        if (!req.session || !req.session.user) {
            return res.redirect('/user/login');
        }
        res.render('product-add');
    },

    add: (req, res) => {
        if (req.session.user != undefined) {
            return res.render("product-add", { title: "Agregar Producto" })
        }
        return res.redirect("/user/login")  //para el boton de agregar producto, si esta registrado o no
    },

    procesarProducto: (req, res) => {

        let { imagen, name, texto } = req.body

        if (!imagen) {
            return res.send("Error: Este campo es obligatorio")
        }
        if (!name) {
            return res.send("Error: Este campo es obligatorio")
        }
        if (!texto) {
            return res.send("Error: Este campo es obligatorio")
        }
    },

    store: (req, res) => {
        let producto = req.body;

        db.Product.create(producto) //Habria que cambiar el nombre con el que va a tener mi base de datos
            .then(function (results) {
                return res.redirect('/products')
            })
            .catch(function (err) {
                console.log(err);
            })
    },

    search: (req, res) => {
        let qs = req.query.Product;

        let filtro = {
            where: [{ title: { [op.like]: `%${qs}%` } }],
            order: [[ 'createAt', 'DESC']], 
            include: [{ model: db.User, as: 'user' }]
        };

        db.Product.findAll(filtro)
            .then(function (results) {
                if (results.length > 0) {
                    return res.render('search-results', { results: results })
                } else {
                    return res.send('No hay resultados para su criterio de busqueda')
                }
            })
            .catch(function (err) {
                return console.log(err);
            })
    },

    detalle: (req, res) => {
        let id = req.params.id

        db.Product.findByPk(id, { include: [{ model: db.User, as: 'usuarios' }] }) //ver con association

            .then(function (result) {
                if (result) {
                    return res.render('product', { product: product })
                } else {
                    return res.send('Producto no encontrado');
                }
            })
            .catch(function (err) {
                return console.log(err);
            })
    }, 


}

module.exports = productController;