const jwt = require('jsonwebtoken');
const users = require('../models/users');

const secretKey = process.env.SECRET_KEY;

const adminMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  try {
    if (!authHeader) {
      return res
        .status(401)
        .json({ message: 'Authorization header required!' });
    }

    const token = authHeader.split(' ')[1];

    const decodedToken = jwt.verify(token, secretKey);

    const user = users.find((user) => user.email === decodedToken.email);

    if (!user || user.role !== 'admin' || !token) {
      return res.status(401).json({ message: 'Unauthorized access!' });
    }

    next();
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = adminMiddleware;
