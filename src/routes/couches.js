import { Router } from "express";
import * as controllers from "../controllers/couch.js";

const router = Router();

router.post("/create", controllers.createCouch);
router.put("/update", controllers.updateCouch);

export default router;