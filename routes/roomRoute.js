import express from 'express';
import { postRoom, deleteRoomById, getAllRooms } from '../controllers/roomController.js';

const roomRouter = express.Router();

roomRouter.post('/', postRoom);
roomRouter.get('/', getAllRooms);
roomRouter.delete('/:id', deleteRoomById);

export default roomRouter;