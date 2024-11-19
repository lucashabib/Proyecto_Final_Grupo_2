const db = require('../database/modules');
const User = db.User;
//Importar operadores

let userController = {
    register: (req, res)=>{
        return res.render("register")
      },

      processRegister: (req, res) => {
        let form = req.body

        if (form.name == '' || form.email =='' || form.password == '') {
          return res.send('Error. Ningún campo puede estar vacio')
        }

        //1. Agregar datos a la base de datos
        

        //2. Crear condicion de que no se pueda repetir el email

        return res.send(form)
      },

    login: (req, res) => {
        return res.render('login')
      },

}

module.exports = userController;