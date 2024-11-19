var express = require('express');
var router = express.Router();

let userController = require('../controllers/userController');

/* GET users listing. */
router.get('/register', userController.register)

router.post('/register', userController.processRegister);

router.get('/login', userController.login);


module.exports = router;
