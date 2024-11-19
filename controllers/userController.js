const db = require('../database/modules/User');
//Importar operadores

let userController = {
    register: (req, res)=>{
        return res.render("register")
      },

      processRegister: (req, res) => {
        let form = req.body

        if (form.name == '' || form.email =='' || form.password == '') {
          return res.send('Ningún campo puede estar vacio')
        }

        //No pueden registrarse emails duplicados
        //if (  )

        return res.send(form)
      },

    login: (req, res) => {
        return res.render('login')
      },

}

module.exports = userController;