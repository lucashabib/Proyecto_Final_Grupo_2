const db = require('../database/models/User');
const User = db.User;

let userController = {
    register: (req, res) => {
        return res.render("register");
    },

    processRegister: (req, res) => {
        let { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.send('Error. Ningún campo puede estar vacío');
        }

        User.findOne({ where: { email: email } })
            .then(user => {
                if (user) {
                    return res.send('Error. Este email ya está registrado');
                }

                return User.create({
                    nombre: name,
                    email: email,
                    contrasena: password
                });
            })
            .then(() => {
                return res.send('Usuario registrado con éxito');
            })
            .catch(error => {
                console.error(error);
                return res.send('Ocurrió un error al procesar la solicitud');
            });
    },

    login: (req, res) => {
        return res.render('login');
    },
};

module.exports = userController;