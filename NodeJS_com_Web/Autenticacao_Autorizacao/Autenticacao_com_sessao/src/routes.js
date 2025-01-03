const express = require('express');
const dashboardControllers = require('./controllers/dashboard-controllers');
const authController = require('./controllers/auth-controller');
const {
  authMiddleware,
  ensureUserIsAdmin,
} = require('./middlewares/auth-middleware');

const router = express.Router();

router.get('/', authController.index);
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
router.get('/auth/logout', authMiddleware, authController.logout);

router.get('/dashboard', authMiddleware, dashboardControllers.dashboard);

router.get(
  '/dashboard/users',
  authMiddleware,
  ensureUserIsAdmin,
  dashboardControllers.users
);

module.exports = router;
