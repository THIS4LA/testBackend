import User from "../models/users.js";
import jwt from "jsonwebtoken";
import argon2 from "argon2";
import dotenv from "dotenv";
import { isAdmin, isLogged } from "../utils/userValidations.js";

dotenv.config();

export function getUsers(req, res) {
  User.find().then((usersList) => {
    res.json({
      list: usersList,
    });
  });
}

export async function postUsers(req, res) {
  const user = req.body;

  //password hashing
  const hashPassword = await argon2.hash(req.body.password);
  user.password = hashPassword;
  console.log(user.password);

  const newUser = new User(user);
  newUser
    .save()
    .then(() => {
      res.json({
        msg: "user created successfully",
      });
    })
    .catch(() => {
      res.json({
        msg: "user creation failed",
      });
    });
}
export function putUsersAdmin(req, res) {
  if (isAdmin(req, res)) {
    const email = req.params.email;
    User.findOneAndUpdate({ email: email }, req.body, { new: true })
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

export function putUsers(req, res) {
  if (isLogged(req, res)) {
    const email = req.params.email;
    const updateData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      whatsapp: req.body.whatsapp,
    };
    User.findOneAndUpdate({ email: email }, updateData, { new: true })
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

export function deleteUsers(req, res) {
  const resemail = req.body.email;
  User.deleteOne({ email: resemail })
    .then(() => {
      res.json({
        msg: "user deleted successfully",
      });
    })
    .catch(() => {
      res.json({
        msg: "user deletion failed",
      });
    });
}

export async function loginUser(req, res) {
  try {
    const credentials = req.body;

    const user = await User.findOne({ email: credentials.email });
    if (!user) {
      return res.status(404).json({
        msg: "username doesn't exist",
      });
    }

    const passwordMatch = await argon2.verify(
      user.password,
      credentials.password
    );
    if (passwordMatch) {
      const payload = {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        type: user.type,
      };
      const token = jwt.sign(payload, process.env.JWT_KEY, {
        expiresIn: "24h",
      });
      return res.json({
        msg: "login success!",
        user: user,
        token: token,
      });
    } else {
      return res.status(401).json({
        msg: "check password",
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: "server error",
      error: error.message,
    });
  }
}
