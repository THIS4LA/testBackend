import express from "express";

import {
  postBooking,
  getAllBookings,
  getBookingById,
  getBookingByRoomId,
  updateBookingById,
} from "../controllers/bookingController.js";

const bookingRouter = express.Router();

bookingRouter.post("/", postBooking);

bookingRouter.get("/", getAllBookings);

bookingRouter.get("/:id", getBookingById);

bookingRouter.get("/room/:id", getBookingByRoomId);

bookingRouter.put("/:id", updateBookingById);

export default bookingRouter;
