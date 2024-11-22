var express = require('express');
var router = express.Router();

let userController = require('../controllers/userController');


router.get('/register', userController.register)

router.post('/register', userController.processRegister);

router.get('/login', userController.login);

router.post('/login', userController.processLogin);


module.exports = router;
