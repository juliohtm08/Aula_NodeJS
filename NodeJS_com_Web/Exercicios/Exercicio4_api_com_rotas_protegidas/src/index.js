const express = require('express');
const authRouter = require('./routes/auth');
const protectedRouter = require('./routes/protected');
const adminRouter = require('./routes/admin');
const adminMiddleware = require('./middlewares/admin-middleware');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/auth', authRouter);
app.use('/protected', protectedRouter);
app.use('/admin', adminMiddleware, adminRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`server online na porta ${PORT}`));
