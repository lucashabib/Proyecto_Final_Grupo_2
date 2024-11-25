const bcrypt = require('bcryptjs');
const db = require('../database/models');
const User = db.User;

let userController = {
    register: (req, res) => {
        if (req.session.user) {
            return res.redirect('/');
        }

        return res.render("register");
    },

    processRegister: (req, res) => {
        let { name, email, password } = req.body;
    
        if (!email) {
            return res.send("Error: El email es obligatorio.");
        }
    
        if (!name) {
            return res.send("Error: El nombre de usuario es obligatorio.");
        }
    
        if (!password) {
            return res.send("Error: La contraseña es obligatoria.");
        }
    
        User.findOne({ where: { email: email } })
            .then(user => {
                if (user) {
                    return res.send("Error: El email ya está registrado.");
                }
                
                let contraEncriptada = bcrypt.hashSync(password, 10);

                return User.create({
                    nombre: name,
                    email: email,
                    contrasena: contraEncriptada 
                })
                .then(() => {
                    res.redirect('/users/login');
                })
                .catch(err => {
                    console.error(err);
                    res.send("Ocurrió un error al procesar el registro.");
                });
            })
            .catch((err) => {
                return console.log(err);
                
            });
    },

    login: (req, res) => {
        if (req.session.user != undefined) {
            return res.redirect('/');
        }

        return res.render('login');
    },
    processLogin: (req, res) => {
        let form = req.body;

        let filtro = {
            where:{
                email: form.email
            }
        }

        db.User.findOne(filtro)
        .then((result) => {

            if (result != undefined) {

                let validarClave = bcrypt.compareSync( form.password , result.contrasena);
                
                if (validarClave) {
                    req.session.user = result;

                    if (form.recordarme === 'true') {
                        res.cookie('user', result.id, { maxAge: 1000 * 60 * 5, httpOnly: true });
                    }

                    return res.redirect("/");

                } else {
                    return res.send("Clave incorrecta");
                }

            } else {
                return res.send("No se encontro un usuario");
            }
        }).catch((err) => {
            return console.log(err);
            
        });
    }, perfil: (req, res) => {
        if (!req.session.user) {
            return res.redirect('/users/login');
        }
        
        let result = req.session.user; 
        return res.render("miPerfil", { result });
    }
};

module.exports = userController;