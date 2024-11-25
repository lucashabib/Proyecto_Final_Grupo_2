var express = require('express');
var router = express.Router();

let userController = require('../controllers/userController');


router.get('/register', userController.register)

router.post('/register', userController.processRegister);

router.get('/login', userController.login);

router.post('/login', userController.processLogin);

router.get('/perfil', userController.perfil);

router.post('/logout', userController.logout)

router.get('/profile/:id', userController.profile);

module.exports = router;
