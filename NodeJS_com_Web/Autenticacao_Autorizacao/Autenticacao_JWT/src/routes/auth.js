const express = require('express');
const users = require('../models/users');
const jwt = require('jsonwebtoken');

const authRouter = express.Router();

const secretKey = 'palavra-chave-super-secreta'; // Chave secreta usada para assinar o token

// Rota de registro de usuários
authRouter.post('/register', (req, res) => {
  const { username, password } = req.body; // Dados enviados pelo cliente

  const user = { username, password }; // Criação do objeto usuário

  users.push(user); // Salvando o usuário no "banco de dados" (simulação)
  console.log(user);

  res.status(201).json(user); // Retornando o usuário registrado
});

// Rota de login do usuário
authRouter.post('/login', (req, res) => {
  const { username, password } = req.body; // Dados enviados pelo cliente

  const user = users.find((user) => user.username === username); // Procurando o usuário pelo nome

  if (!user || user.password !== password) {
    // Verificando se o usuário existe e a senha está correta
    return res.status(401).json('Invalid credentials!');
  }

  const payload = { username }; // Dados do usuário que serão incluídos no token

  // Gerando o token JWT com a chave secreta e tempo de expiração
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

  res.json({ token }); // Retornando o token gerado
});

module.exports = authRouter;
