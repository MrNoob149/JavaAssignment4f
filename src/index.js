import 'dotenv/config';
import express from 'express';


const router = express.Router();

import app from './app.js';

const hostname = '127.0.0.1';
const port = 3000;

console.log(`Hello ${process.env.HELLO}`)

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/api/v1/cats`);
});

