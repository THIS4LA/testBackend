import Room from "../models/room.js";
import { isAdmin } from "../utils/userValidations.js";

export function postRoom(req, res) {
  if (isAdmin(req, res)) {
    const newRoom = new Room(req.body);
    newRoom
      .save()
      .then((result) =>
        res.json({
          msg: "Room created successfully",
          result: result,
        })
      )
      .catch((err) =>
        res.status(500)({
          msg: "Failed to create room",
          error: err,
        })
      );
  }
}

export function deleteRoomById(req, res) {
  if (isAdmin(req, res)) {
    const roomId = req.params.id;
    Room.findOneAndDelete({ roomId: roomId })
      .then((result) =>
        res.json({
          msg: "Room deleted successfully",
          result: result,
        })
      )
      .catch((err) => ({
        msg: "Failed to delete room",
        error: err,
      }));
  }
}

export function getAllRooms(req, res) {
  Room.find()
    .then((result) => res.json(result))
    .catch((err) =>
      res.status(500).json({ msg: "Failed to get rooms", error: err })
    );
}

export function getRoomById(req, res) {
  const roomId = req.params.id;
  Room.findOne({roomId:roomId})
    .then((result) => res.json(result))
    .catch((err) =>
      res.status(500).json({ msg: "Failed to get room", error: err })
    );
}
