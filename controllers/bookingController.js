import Booking from "../models/booking.js";
import { isAdmin, isCustomer } from "../utils/userValidations.js";

export function postBooking(req, res) {
  if (isCustomer(req, res)) {
    var startBookingId = 1900;
    Booking.countDocuments().then((count) => {
      const bookingId = startBookingId + count;

      req.body.bookingId = bookingId;
      req.body.email=req.user.email;
      const newBooking = new Booking(req.body);
      newBooking
        .save()
        .then((result) =>
          res.json({
            msg: "Booking created successfully",
            result: result,
          })
        )
        .catch((err) =>
          res.status(500).json({
            msg: "Failed to create booking",
            error: err,
          })
        );
    });
  }
}

export function postBookingAdmin(req, res) {
  if (isAdmin(req, res)) {
    var startBookingId = 1900;
    Booking.countDocuments().then((count) => {
      const bookingId = startBookingId + count;

      req.body.bookingId = bookingId;
      const newBooking = new Booking(req.body);
      newBooking
        .save()
        .then((result) =>
          res.json({
            msg: "Booking created successfully",
            result: result,
          })
        )
        .catch((err) =>
          res.status(500).json({
            msg: "Failed to create booking",
            error: err,
          })
        );
    });
  }
}

export function getAllBookings(req, res) {
  if (isAdmin(req, res)) {
    Booking.find()
      .then((result) =>
        res.json({
          result: result,
        })
      )
      .catch((err) =>
        res.status(500).json({
          msg: "Failed to get bookings",
          error: err,
        })
      );
  }
}

export function getBookingById(req, res) {
  const bookingId = req.params.id;
  Booking.findOne({ bookingId: bookingId })
    .then((result) => res.json({ result: result }))
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
}

export function getBookingByRoomId(req, res) {
  if (isAdmin(req, res)) {
    const roomId = req.params.id;
    Booking.find({ roomId: roomId })
      .then((result) => res.json({ result: result }))
      .catch((err) =>
        res.status(500).json({
          error: err,
        })
      );
  }
}

export function updateBookingById(req, res) {
  if (isAdmin(req, res)) {
    const bookingId = req.params.id;
    Booking.findOneAndUpdate({ bookingId: bookingId }, req.body, { new: true })
      .then((result) =>
        res.json({
          result: result,
        })
      )
      .catch((err) =>
        res.status(500).json({
          error: err,
        })
      );
  }
}
