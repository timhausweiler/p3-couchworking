import express from "express";
import logger from "morgan";
import couches from "./routes/couches.js";
import users from "./routes/users.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(logger("dev"));

app.use("/user-api", users);
app.use("/couch-api", couches);
