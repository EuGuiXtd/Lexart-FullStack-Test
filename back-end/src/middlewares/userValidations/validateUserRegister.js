const validateUserRegister = (req, res, next) => {
    const { fullName, email, password } = req.body;
    const regex = /\S+@\S+\.\S+/;
    if (!fullName || !email || !password || !regex.test(email)) {
        return res.status(400).json({ message: 'Invalid fields' });
    }
    next();
    }

module.exports = validateUserRegister;