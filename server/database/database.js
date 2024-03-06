const mongoose = require("mongoose");
const connection =
  "mongodb+srv://aashishb879:Apple@1234@cluster0.5r44nke.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectToDatabase() {
  await mongoose.connect(connection);
  console.log("connected");
}

module.export = connectToDatabase;
