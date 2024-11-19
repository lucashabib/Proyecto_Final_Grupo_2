//Importar base de datos
//Importar operadores

let userController = {
    register: (req, res)=>{
        return res.render("register")
      },

      processRegister: (req, res) => {
        return res.render("register")
      },

    login: (req, res) => {
        return res.render('login')
      },

}

module.exports = userController;