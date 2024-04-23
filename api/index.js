import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "../api/routes/users.js";
import authRoute from "../api/routes/auth.js";
import kontrakRoute from "../api/routes/kontraks.js";
import cutiRoute from "../api/routes/cutis.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/kontrak", kontrakRoute);
app.use("/api/cuti", cutiRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8080, () => {
  connect();
  console.log(`App run on port 8080`);
});
