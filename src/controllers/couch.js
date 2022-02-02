import Couch from "../models/couch.js";
import errorHandler from "../utilities/error.js";

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
