//Importar base de datos
const db = require('../database/models');
//Importar operadores
const Product = db.Product;

const Op = db.Sequelize.Op

const productController = {

    show: function (req, res) {
        return res.render('index')
    },


    mostrarProducto: (req, res) => {
        if (!req.session || !req.session.user) {
            return res.redirect('/users/login');
        }
        res.render('product-add');
    },

    add: (req, res) => {
        if (req.session.user != undefined) {
            return res.render("product-add", { title: "Agregar Producto" })
        }
        return res.redirect("/users/login")  //para el boton de agregar producto, si esta registrado o no
    },

    procesarProducto: (req, res) => {

        let { imagen, nombre, descripcion, precio } = req.body
        if (!imagen) {
            return res.send("Error: La imagen es obligatoria")
        }
        if (!nombre) {
            return res.send("Error: El nombre es obligatorio")
        }
        if (!descripcion) {
            return res.send("Error: La descrpcion es obligatoria")
        }
        if (!precio) {
            return res.send("Error: El precio es obligatorio")
        }

        db.Product.create ({
            imagen: imagen,
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            userId: req.session.user.id
        })
         .then (function() {
            return res.redirect('/products/');   // Redirigir al listado de productos u otra página
        })
        .catch(function (err) {
            return console.log(err);
        })
    },

    store: (req, res) => {
        let producto = req.body;

        db.Product.create(producto) //Habria que cambiar el nombre con el que va a tener mi base de datos
            .then(function (results) {
                return res.redirect('/products')
            })
            .catch(function (err) {
                return console.log(err);
            })
    },

    search: (req, res) => {
        let qs = req.query.search;
        //return res.send(qs)
        
        let filtro = {
            where: [{ nombre: { [Op.like]: `%${qs}%` } }],
            order: [[ 'createdAt', 'DESC']], 
            //include: [{ model: db.User, as: 'User' }]
            include: [ { association: "user"} ]
        };

        db.Product.findAll(filtro)
            .then(function (results) {
               // return res.send(results)
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

        db.Product.findByPk(id, { include: [{ model: db.User, as: 'User' }] }) //ver con association

            .then(function (result) {
                if (result) {
                    return res.render('product', { product: result })
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