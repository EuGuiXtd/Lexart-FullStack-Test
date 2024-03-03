const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const { User } = require('../../models/user.model');

const validateToken = async (req, res, next) => {
    const token = req.headers.authorization;
    
    if (!token) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Token not found' });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ where: { email: decoded.email } });
    
        if (!user) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Token invalid' });
        }
    
        req.user = user;
        next();
    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Expired or invalid token' });
    }
    }

module.exports = validateToken;