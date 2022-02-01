import mongoose from "mongoose";

let MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/CouchWorking";

mongoose.set("returnOriginal", false);

mongoose
  .connect(MONGODB_URI)
  .catch((error) =>
    console.error("Error connecting to MongoDB: ", error.message)
  );

mongoose.connection.on("disconnected", () =>
  console.log(`Disconnected from MongoDB!`)
);

mongoose.connection.on("error", (error) =>
  console.error(`MongoDB connection error: ${error}`)
);

export default mongoose.connection;