import mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = new Schema(
  {
    username: {type: String, required: true, trim: true},
    firstName: {type: String, required: true, trim: true},
    lastName: {type: String, required: true, trim: true},
    email: {type: String, required: true, trim: true},
    password_digest: {type: String, required: true, trim: true},
  },
  {timestamps: true}
);

export default mongoose.model("user", User);
