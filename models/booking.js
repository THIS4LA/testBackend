import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
  bookingId: {
    type: String,
    required: true,
    unique: true,
  },
  roomId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "pending",
  },
  reason: {
    type: String,
    default: "",
  },
  checkIn: {
    type: Date,
    required: true,
  },
  checkOut: {
    type: Date,
    required: true,
  },
  notes: {
    type: String,
    default: "",
  },
});

const Booking = mongoose.model("bookings", bookingSchema);

export default Booking;
