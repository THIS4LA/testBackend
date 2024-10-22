import express from 'express';
import { postRoom, deleteRoomById, getAllRooms, getRoomById, updateRoomById, getRoomsByCategory } from '../controllers/roomController.js';

const roomRouter = express.Router();

roomRouter.post('/', postRoom);
roomRouter.get('/', getAllRooms);
roomRouter.delete('/:id', deleteRoomById);
roomRouter.get('/:id',getRoomById);
roomRouter.put('/:id',updateRoomById);
roomRouter.get('/category/:category',getRoomsByCategory);

export default roomRouter;