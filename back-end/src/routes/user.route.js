const express = require('express');

const router = express.Router();

const validateUserNotExists = require('../middlewares/userValidations/validadeUserNotExists');
const validateUserExists = require('../middlewares/userValidations/validateUserExists');
const validateUserLogin = require('../middlewares/userValidations/validateUserLogin');
const validateUserRegister = require('../middlewares/userValidations/validateUserRegister');


const userController = require('../controllers/user.controller');

router.post('/user/register', validateUserRegister,validateUserNotExists, userController.createUser);
router.post('/user/login', validateUserLogin, userController.loginUser);
router.get('/user', userController.getAllUsers);
router.get('/user/:id', validateUserExists, userController.getUserById);

module.exports = router;