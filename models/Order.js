const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  items: Array,
  date: Date,
  cost: Number,
  address: String,
});

module.exports = mongoose.model("Order", OrderSchema);
