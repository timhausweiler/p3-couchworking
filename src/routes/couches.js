import {Router} from "express";

const router = Router();

router.get("/couches", controllers.fetchAllCouches)
router.get("/couch/:id", controllers.fetchCouch)

export default router;
