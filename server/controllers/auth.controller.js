import User from "../models/user.model.js";
import brycpt from "bcrypt";

const signUp = async (req, res) => {
  const { username, email, password } = req.body;
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
    res.send(err.message);
  }
};

export { signUp };
