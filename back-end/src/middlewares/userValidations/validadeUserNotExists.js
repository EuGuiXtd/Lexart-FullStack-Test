const { User } = require('../../models/user.model');

const validateUserNotExists = async (req, res, next) => {
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
        return res.status(409).json({ message: 'User already registered' });
    }
    next();
    }

module.exports = validateUserNotExists;