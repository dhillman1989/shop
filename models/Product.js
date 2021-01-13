const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  price: Number,
  image: String,
  category: String,
  desc: String,
});

module.exports = mongoose.model("Product", ProductSchema);
