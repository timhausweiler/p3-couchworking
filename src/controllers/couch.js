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

export const deleteCouch = async (req, res) => {
    try {
        const { id } = req.params
        const deletedCouch = await Couch.findByIdAndDelete(id)
        if (deletedCouch) {
        return res.json(errorHandler(false, "Couch deleted"));
        } throw new Error('Couch not found')
    } catch (error) {
        return res.json(errorHandler(true, "Couch doesn't exist"));
    }
}
