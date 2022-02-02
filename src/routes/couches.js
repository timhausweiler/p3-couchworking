import { Router } from "express";
import * as controllers from "../controllers/couch.js";

const router = Router();

router.post("/create", controllers.createCouch);
router.delete('/delete/:id', deleteCouch);

export default router;
