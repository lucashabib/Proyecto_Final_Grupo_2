//Importar base de datos
//Importar operadores

let userController = {
    index: function(req, res, next) {
        res.send('respond with a resource');
      },

    register: function(req, res) {
        return res.send('REGISTRAR USUARIO')
      },

    login: function(req, res) {
        return res.send('INGRESAR USUARIO')
      }
}

module.exports = userController;