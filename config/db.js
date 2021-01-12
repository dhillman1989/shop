const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongo_URI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
