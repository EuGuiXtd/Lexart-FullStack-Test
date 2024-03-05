const userService = require('../services/user.service');
const { GenerateToken } = require('../utils/generate.jwt');
const md5 = require('md5');

const getAllUsers = async (req, res) => {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    res.status(200).json(user);
}

const createUser = async (req, res) => {
    const { fullName, email, password } = req.body;
    const hashedPassword = md5(password);
    const newUser = await userService.createUser(fullName, email, hashedPassword);
    res.status(201).json(newUser);
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    await userService.loginUser(email, password);
    const user = await userService.getUserByEmail(email);
    const { id } = user;
    const token = await GenerateToken(id);
    res.status(200).json(token);
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    loginUser
};