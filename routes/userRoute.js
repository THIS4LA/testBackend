import express from "express";
import { getUsers,postUsers,putUsers,deleteUsers,loginuser } from "../controllers/userController.js";

const userRouter = express.Router();

// GET request to fetch all users
userRouter.get("/",getUsers);

userRouter.post("/",postUsers);

userRouter.post("/login",loginuser);

userRouter.put("/",putUsers);

userRouter.delete("/",deleteUsers);

export default userRouter;