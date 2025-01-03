const express = require('express');
const authMiddleware = require('../middleware/auth-middleware');

const protectedRouter = express.Router();

// Rota protegida (requer autenticação)
protectedRouter.get('/dashboard', authMiddleware, (req, res) => {
  const username = req.authenticatedUser.username; // Recupera o nome do usuário autenticado
  res.json({
    message: `você está na área protegida. Bem vindo(a) ${username}`,
  });
});

module.exports = protectedRouter;
