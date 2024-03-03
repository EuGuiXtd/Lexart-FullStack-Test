const md5 = require('md5');
const { User } = require('../../models/user.model');

const validateUserLogin = async (req, res, next) => {
    const { email, password } = req.body;
    const hashedPassword = md5(password);

    const verifyPassword = await User.findOne({ where: { password: hashedPassword } });
    if (!verifyPassword) {
        return res.status(401).json({ message: 'Incorrect password' });
    }
    const verifyEmail = User.findOne({ where: { email } });
      if (!verifyEmail) {
          return res.status(401).json({ message: 'Incorrect email' });
      }
    if (!email || !password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    next();
  }
  
  module.exports = validateUserLogin;