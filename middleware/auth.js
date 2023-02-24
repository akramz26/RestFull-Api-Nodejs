const jwt = require('jsonwebtoken');
require('dotenv').config;

module.exports = (req, res, next) => {
    const token = req.header('x-auth-token');
    console.log(req)
    if (!token) return res.status(401).send('Access denied. No token provided.');

    try {
        const decoded = jwt.verify(token, Her_Put_Your_Env_Password);
        req.user = decoded;
        next();
    }
    catch (e) {
        res.status(400).send('Invalid token.');
    }
}