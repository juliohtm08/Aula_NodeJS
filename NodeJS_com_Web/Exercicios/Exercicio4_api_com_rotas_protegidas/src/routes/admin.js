/* 
    Rotas para gerenciar todos os usuários, mas que só podem ser acessadas 
    por usuários administradores. Nelas deve ser possível criar outros 
    usuários administradores, assim como ler e excluir qualquer usuário.
*/

const express = require('express');
const users = require('../models/users');

const adminRouter = express.Router();

// GET /users/:id
adminRouter.get('/users/:id', (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id === +id);

  if (!user) return res.status(404).json({ message: 'User not found!' });

  return res.status(200).json({ user });
});

// POST /register
adminRouter.post('/registerAdmin', (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = users.find((user) => user.email === email);

    if (user) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    const newUser = {
      id: Math.floor(Math.random() * 99999),
      username,
      email,
      password,
      role: 'admin',
    };

    users.push(newUser);
    console.log(newUser);

    res.status(201).json(newUser);
  } catch (error) {
    throw new Error(error);
  }
});

// DELETE /users/:id
adminRouter.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  const userIndex = users.findIndex((user) => user.id === +id);

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found!' });
  }

  const deletedUser = users.splice(userIndex, 1);

  res.json(deletedUser).end();
});

module.exports = adminRouter;
