const express = require('express');
const users = require('../models/users');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authRouter = express.Router();

const secretKey = process.env.SECRET_KEY;

// GET /users
authRouter.get('/users', (req, res) => {
  try {
    if (!users) {
      return res.status(404).json({ message: 'User not found!' });
    }

    return res.status(200).json({ users });
  } catch (error) {
    throw new Error(error);
  }
});

// POST /register
authRouter.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  try {
    const emailRegistered = users.find((user) => user.email === email);

    if (emailRegistered) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    const newUser = {
      id: Math.floor(Math.random() * 99999),
      username,
      email,
      password,
      role: 'standard',
    };

    users.push(newUser);
    console.log(newUser);

    res.status(201).json(newUser);
  } catch (error) {
    throw new Error(error);
  }
});

// POST /login
authRouter.post('/login', (req, res) => {
  const { email, password } = req.body;
  try {
    const user = users.find((user) => user.email === email);

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const payload = {
      email: user.email,
      username: user.username,
      role: user.role,
    };
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

    return res.status(200).json({ token });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = authRouter;
