import Couch from "../models/couch.js";
import errorHandler from "../utilities/error.js";

export const createCouch = (req, res) => {
  try {
    const couch = new Couch(req.body);
    couch.save();
    return res.json(errorHandler(false, "Created couch", couch));
  } catch (error) {
    console.log(error);
    return res.json(errorHandler(true, "Error creating couch"));
  }
};

export const deleteCouch = (req, res) => {
  try {
    const {id} = req.params;
    const deletedCouch = Couch.findByIdAndDelete(id);
    if (deletedCouch) {
      return res.json(errorHandler(false, "Couch deleted", deletedCouch));
    }
    throw new Error("Couch not found");
  } catch (error) {
    return res.json(errorHandler(true, "Couch doesn't exist"));
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

export const fetchAllCouches = (req, res) => {
  try {
    const couches = Couch.find();
    res.json(couches);
    return res.json(errorHandler(false, "fetched all couches", couches));
  } catch (error) {
    console.log(error.message);
    return res.json(errorHandler(true, "Error fetching all couches"));
  }
};

export const fetchCouch = (req, res) => {
  try {
    const {id} = req.params;
    const couch = Couch.findById(id);
    if (couch) {
      return res.json(couch);
    }
    return res.json(errorHandler(true), "Couch not found");
  } catch (error) {
    console.log(error.message);
    return res.json(errorHandler(true, "Error fetching couch"));
  }
};
