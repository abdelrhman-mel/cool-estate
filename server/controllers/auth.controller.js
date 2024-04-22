import User from "../models/user.model.js";
import brycpt from "bcrypt";

const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  //check the incoming data
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  // check if user already exists
  const userExists = await User.findOne({ email: email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }
  const hashedPassword = await brycpt.hash(password, 10);
  const user = new User({ username, email, password: hashedPassword });
  try {
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    next(err);
  }
};

export { signUp };
