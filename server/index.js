import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//connect to mongodb
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

//routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

//error handling middleware
app.use((err, req, res, nxet) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).send({
    success: false,
    statusCode,
    message,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
