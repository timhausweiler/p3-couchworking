import { Router } from "express";
import * as controllers from "../controllers/couch.js";

const router = Router();

router.post("/create", controllers.createCouch);
router.delete('/delete/:id', controllers.deleteCouch);
router.put("/update", controllers.updateCouch);
router.get("/couches", controllers.fetchAllCouches)
router.get("/couch/:id", controllers.fetchCouch)

export default router;
