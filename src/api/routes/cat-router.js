import express from 'express';
import multer from 'multer';

import {
  getCat,
  getCatById,
  postCat,
  putCat,
  deleteCat,
  getCatsByUserId
} from '../controllers/cat-controller.js';

import { createThumbnail } from '../../middlewares/upload.js';


const catRouter = express.Router();
const upload = multer({ dest: 'uploads/' })

catRouter.get('/user/:userId', getCatsByUserId);

catRouter.route('/').get(getCat).post(upload.single('cat'), createThumbnail ,postCat);

catRouter.route('/:id').get(getCatById).put(putCat).delete(deleteCat);


export default catRouter;