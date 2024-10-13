import express from 'express';

import { postgalleryItem, getGalleryItems } from '../controllers/galleryItemController.js';

const galleryItemRouter = express.Router();

galleryItemRouter.post('/', postgalleryItem);
galleryItemRouter.get('/', getGalleryItems);

export default galleryItemRouter;