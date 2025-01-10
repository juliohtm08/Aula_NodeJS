const jwt = require('jsonwebtoken');
const users = require('../models/users');

const secretKey = process.env.SECRET_KEY;

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header required!' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decodedToken = jwt.verify(token, secretKey);

    const user = users.find((user) => user.email === decodedToken.email);

    if (!user) {
      req.authenticatedUser = { username: 'Visitante' };
      return next();
    }

    req.authenticatedUser = user;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid Token' });
  }
};

module.exports = authMiddleware;
