import express from "express";
import logger from "morgan";
import couches from "./routes/couches.js";
import users from "./routes/users.js";
import db from "./db/connection.js";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use("/user-api", users);
app.use("/couch-api", couches);

db.on("connected", () => {
  app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`);
  });
});
