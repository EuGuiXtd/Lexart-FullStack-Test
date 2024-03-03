const express = require('express');

const router = express.Router();

const validateUserNotExists = require('../middlewares/userValidations/validadeUserNotExists');
const validateUserExists = require('../middlewares/userValidations/validateUserExists');
const validateUserLogin = require('../middlewares/userValidations/validateUserLogin');
const validateUserRegister = require('../middlewares/userValidations/validateUserRegister');


const userController = require('../controllers/user.controller');

router.post('/register', validateUserRegister,validateUserNotExists, userController.createUser);
router.post('/login',validateUserLogin.validateUserEmail,validateUserLogin.validateUserPassword, userController.loginUser);
router.get('/', userController.getAllUsers);
router.get('/:id', validateUserExists, userController.getUserById);

module.exports = router;