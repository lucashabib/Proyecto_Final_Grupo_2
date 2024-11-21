const db = require('../database/models');
const User = db.User;

let userController = {
    register: (req, res) => {
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
    
                return User.create({
                    nombre: name,
                    email: email,
                    contrasena: password 
                })
                .then(() => {
                    res.redirect('/');
                })
                .catch(err => {
                    console.error(err);
                    res.send("Ocurrió un error al procesar el registro.");
                });
            })
            .catch(err => {
                console.error(err);
                res.send("Ocurrió un error al verificar el email.");
            });
    },

    login: (req, res) => {
        return res.render('login');
    },
};

module.exports = userController;