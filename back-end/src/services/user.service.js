const { User } = require('../models/');
const md5 = require('md5');

const getAllUsers = async () => {
    const allUsers = await User.findAll();
    return allUsers;
}

const getUserByEmail = async (email) => {
    const user = await User.findOne({ where: { email } });
    return user;
}

const getUserById = async (id) => {
    const user = await User.findByPk(id);
    return user;
}

const createUser = async (fullName, email, password) => {
    const newUser = await User.create({ fullName, email, password });
    return newUser;
    };

const loginUser = async (email, password) => {
    const hashedPassword = md5(password);
    const user = await User.findOne({ where: { email, password: hashedPassword } });
    return user;
    }

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    loginUser,
    getUserByEmail
};