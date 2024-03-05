require('dotenv').config();
const jwt = require('jsonwebtoken');

const GenerateToken = async (id) => {
    const secret = process.env.JWT_SECRET;
    const payload = {
         id,
        };
    const token = jwt.sign(payload, secret);
    return token;
}

module.exports = { GenerateToken };