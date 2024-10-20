import express from "express";
import bodyParser from "body-parser";
import userRouter from "./routes/userRoute.js";
import mongoose from "mongoose";
import galleryItemRouter from "./routes/galleryItemRoute.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import categoryRouter from "./routes/categoryRoute.js";
import roomRouter from "./routes/roomRoute.js";

dotenv.config();

const app = express();

const connectionString = process.env.MONGO_URL;

// Connect to MongoDB
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch(() => {
    console.log("Failed to connect to MongoDB!");
  });

app.use(bodyParser.json());

app.use((req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (token != null) {
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
      if (decoded != null) {
        req.user = decoded;
        next();
      } else {
        //error when decoding
        next();
      }
    });
  } else {
    //no token
    next();
  }
});

app.use("/api/users", userRouter);
app.use("/api/gallery", galleryItemRouter);
app.use("/api/category", categoryRouter);
app.use("/api/room",roomRouter);

app.listen(5000, (req, res) => {
  const port = "5000";
  console.log(`Server is running on port ${port}`);
});
