import express from "express";

import {
  postBooking,
  getAllBookings,
  getBookingById,
  getBookingByRoomId,
  updateBookingById,
  postBookingAdmin,
} from "../controllers/bookingController.js";

const bookingRouter = express.Router();

bookingRouter.post("/", postBooking);

bookingRouter.post("/Admin", postBookingAdmin);

bookingRouter.get("/", getAllBookings);

bookingRouter.get("/:id", getBookingById);

bookingRouter.get("/room/:id", getBookingByRoomId);

bookingRouter.put("/:id", updateBookingById);

export default bookingRouter;
