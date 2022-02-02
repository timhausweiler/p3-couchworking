import Couch from "../models/couch.js";
import errorHandler from "../utilities/error.js";

export const fetchAllCouches = async (req, res) => {
  try {
    const couches = await Couch.find()
    res.json(couches)
    return res.json(errorHandler(false, "fetched all couches", couches))
  } catch (error) {
    console.log(error.message)
    return res.json(errorHandler(true, "Error fetching all couches"))
  }
};

export const fetchCouch = async (req,res) => {
  try {
    const { id } = req.params
    const couch = await Couch.findById(id)
    if (couch) {
      return res.json(couch)
    }
    return res.json(errorHandler(true), "Couch not found")
  } catch (error) {
    console.log(error.message)
    return res.json(errorHandler(true, "Error fetching couch"))
  }
};

