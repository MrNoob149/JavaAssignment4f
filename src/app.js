import express from 'express';
const app = express();
import catRouter from './api/routes/cat-router.js';

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1/cats', catRouter);

export default app;