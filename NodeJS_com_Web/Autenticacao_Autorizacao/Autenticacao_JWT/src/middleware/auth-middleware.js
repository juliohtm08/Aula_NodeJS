const jwt = require('jsonwebtoken');
const users = require('../models/users');

const secretKey = 'palavra-chave-super-secreta'; // Chave secreta usada para verificar o token

// Middleware de autenticação
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization; // Cabeçalho Authorization enviado pelo cliente

  if (!authHeader) {
    // Verifica se o cabeçalho existe
    return res.status(401).json({ message: 'Authorization header required' });
  }

  const token = authHeader.split(' ')[1]; // Extraindo o token do cabeçalho (Bearer <token>)

  try {
    const decodedToken = jwt.verify(token, secretKey); // Verificando a validade do token com a chave secreta
    //console.log(decodedToken);

    // Procurando o usuário correspondente ao token decodificado
    const user = users.find((user) => user.username === decodedToken.username);

    if (!user) {
      // Verifica se o usuário existe
      return res.status(401).json({ message: 'Invalid user' });
    }

    req.authenticatedUser = user;

    next(); // Permite que a requisição continue para a próxima etapa
  } catch (error) {
    return res.status(401).json({ message: 'Invalid Token' });
  }
};

module.exports = authMiddleware;
