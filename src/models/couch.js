import mongoose from "mongoose"

const Schema = mongoose.Schema

const Couch = new Schema(
  {
    username: {type: String, trim: true},
    title: {type: String, required: true, trim: true},
    description: {type: String, required: true, trim: true},
    location: {type: String, required: true, trim: true},
    image_URL: {type: String, trim: true},
    contactInfo: {type: String, required: true, trim: true},
  },
  {timestamps: true}
)

export default mongoose.model("couch", Couch)
