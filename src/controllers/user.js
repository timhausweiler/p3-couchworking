import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import errorHandler from "../utilities/error.js";

const SALT_ROUNDS = 10;
const SECRET = process.env.SECRET || "astronaut";

export const signUp = async (req, res) => {
  try {
    const {username, email, password, firstName, lastName} = req.body;
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
      id: user._id,
      username: user.username,
    };
    const token = jwt.sign(payload, SECRET);
    res.cookie("jwt", token, {maxAge: 840000});
    // res.status(201).json({ token });
    return res.json(errorHandler(false, "Signed up user", user));
  } catch (error) {
    console.log(error.message);
    // res.status(400).json({ error: error.message });
    return res.json(errorHandler(true, "Error signing up user"));
  }
};

export const signIn = async (req, res) => {
  try {
    const {username, password} = req.body;
    const user = await User.findOne({username: username}).select(
      "username email password_digest"
    );
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        id: user._id,
        username: user.username,
      };

      const token = jwt.sign(payload, SECRET);
      // console.log(token);
      res.cookie("jwt", token, {maxAge: 840000});
      console.log(req.headers.cookie);
      return res.json(errorHandler(false, "Signed in user", user));
    } else {
      return res.json(errorHandler(true, "Invalid Credentials"));
    }
  } catch (error) {
    console.log(error.message);
    return res.json(errorHandler(true, "Error signing in user"));
  }
};

//need to change redirect route
export const signOut = (req, res) => {
  res.cookie("jwt", "", {maxAge: 1}).redirect("/user-api");
};
