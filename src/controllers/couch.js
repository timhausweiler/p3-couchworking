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
};

export const updateCouch = (req, res) => {
  try {
    Couch.findOneAndUpdate(
      {_id: req.params.id},
      req.body,
      (error, updatedCouch) => {
        if (updatedCouch) {
          res.json(errorHandler(false, "Updated Couch", updatedCouch));
        } else {
          return res.json(
            errorHandler(true, "Error updating couch", {
              error: error.message,
            })
          );
        }
      }
    );
  } catch (error) {
    return res.json(errorHandler(true, "Error updating couch"));
  }
};