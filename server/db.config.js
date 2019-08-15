import mongoose from "mongoose";

mongoose.connect(process.env.DB || "mongodb://localhost:27017/tayyabaziz", { useNewUrlParser: true, useFindAndModify: false });

const db = mongoose.connection;
db.on("error", function (err) {
  console.error("Unable to connect to the database:", err.message);
  process.exit();
});
db.once("open", function () {
  // we're connected!
  console.log("Connection has been established successfully.");
});