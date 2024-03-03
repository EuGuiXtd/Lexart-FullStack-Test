const md5 = require('md5');
const { User } = require('../../models/');
const userService = require('../../services/user.service');

const validateUserPassword = async (req, res, next) => {
    const { password } = req.body;
    const hashedPassword = md5(password);

    const verifyPassword = await User.findOne({ where: { password: hashedPassword } });
    
    if (!verifyPassword) {
        return res.status(401).json({ message: 'Incorrect password' });
    }
    next();
  }

const validateUserEmail = async (req, res, next) => {
    const { email } = req.body;
    const user = await userService.getUserByEmail(email);
    if (!user) {
        return res.status(401).json({ message: 'Incorrect email' });
    }
    next();
  }
  
module.exports = {
    validateUserPassword,
    validateUserEmail
  };