import express from 'express';
const app = express();
import userRouter from './api/routes/user-router.js';

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1/users', userRouter);

export default app;