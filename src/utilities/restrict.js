import jwt from "jsonwebtoken"
const SECRET = process.env.SECRET || "astronaut"

const restrict = (req,res,next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const data = jwt.verify(token, SECRET)
    console.log(token);
    next()
  } catch (error) {
    console.log(error)
    return res.json(errorHandler(true, "unauthorized access"))
  }
}

export default restrict;