import express from 'express';

const router = express.Router();

import app1 from './appU.js';

const hostname = '127.0.0.1';
const port = 3000;

app1.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/api/v1/users`);
});