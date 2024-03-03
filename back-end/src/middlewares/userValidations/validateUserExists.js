const userService = require('../../services/user.service');

const validateUserExists = async (req, res, next) => {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    next();
    }

module.exports = validateUserExists;