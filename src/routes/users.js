import {Router} from "express"
import * as controllers from "../controllers/user.js"

const router = Router()

router.post("/sign-up", controllers.signUp)
router.post("/sign-in", controllers.signIn)
router.get("/sign-out", controllers.signOut)
router.get("/verify", controllers.verify)

export default router
