import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

const SALT_ROUNDS = 10;
const SECRET = process.env.SECRET || "astronaut"

export const signUp = async (req, res) => {
  try {
    const { username, email, password, firstName, lastName } = req.body;
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS);
    const user = new User({
      username,
      firstName,
      lastName,
      email,
      password_digest,
    });
    await user.save();
    const payload = {
      id = User._id,
    };
    const token = jwt.sign(payload, SECRET)
    res.status(201).json({ token });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};