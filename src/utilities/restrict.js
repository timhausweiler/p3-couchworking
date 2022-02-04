import jwt from "jsonwebtoken"
import errorHandler from "./error.js"
const SECRET = process.env.SECRET || "Astronaut"

const restrict = (req, res, next) => {
  try {
    const token = req.headers.authorization
    console.log(token)
    // .split("")[1]
    const data = jwt.verify(token, SECRET)

    next()
  } catch (error) {
    // console.log(req.headers.authorization)
    console.log(error)
    return res.json(errorHandler(true, "unauthorized access"))
  }
}

export default restrict
