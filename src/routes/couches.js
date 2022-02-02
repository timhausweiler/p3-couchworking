import {Router} from "express";
import * as controllers from "../controllers/couch.js";

const router = Router();

router.put("/update", controllers.updateCouch);

export default router;
