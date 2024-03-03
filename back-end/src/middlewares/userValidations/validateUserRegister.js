const validateUserRegister = (req, res, next) => {
    const { name, email, password } = req.body;
    const regex = /\S+@\S+\.\S+/;
    if (!name || !email || !password || !regex.test(email)) {
        return res.status(400).json({ message: 'Invalid fields' });
    }
    next();
    }

module.exports = validateUserRegister;