import Couch from "../models/couch.js";
import errorHandler from "../utilities/error.js";

export const createCouch = async (req, res) => {
  try {
    const couch = new Couch(req.body)
    await couch.save()
    return res.json(errorHandler(false, "Created couch", couch));
  } catch (error) {
    console.log(error)
    return res.json(errorHandler(true, "Error creating couch"));
  }
}