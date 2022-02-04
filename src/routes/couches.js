import {Router} from "express"
import * as controllers from "../controllers/couch.js"
import restrict from "../utilities/restrict.js"

const router = Router()

router.post("/create", restrict, controllers.createCouch)
router.delete("/delete/:id", restrict, controllers.deleteCouch)
router.put("/update/:id", restrict, controllers.updateCouch)
router.get("/couches", controllers.fetchAllCouches)
router.get("/couch/:id", restrict, controllers.fetchCouch)

export default router
