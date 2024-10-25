import express from "express";
import { getUsers,postUsers,putUsers,deleteUsers,loginUser, putUsersAdmin } from "../controllers/userController.js";

const userRouter = express.Router();

// GET request to fetch all users
userRouter.get("/",getUsers);

userRouter.post("/",postUsers);

userRouter.post("/login",loginUser);

userRouter.put("/:email", putUsers);

userRouter.put("/Admin/:email", putUsersAdmin);


userRouter.delete("/",deleteUsers);

export default userRouter;