import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: "Name is required",
      unique: true,
    },
    email: {
      type: String,
      required: "Email is required",
      unique: true,
    },
    password: {
      type: String,
      required: "Password is required",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
