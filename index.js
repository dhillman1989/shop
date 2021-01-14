const express = require("express");
const app = express();
/// ^^^EXPRESS IMPORT AND INITIATION^^^///

/// package imports ///
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const flash = require("connect-flash");
const connectDB = require("./config/db");
const Product = require("./models/Product");
const Order = require("./models/Order");

///connect to MONGODB ///
connectDB();

///BODY PARSER///

app.use(express.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/// MAIN ROUTES ///

//TEST//
app.get("/", (req, res) => {
  res.send("hello");
});

///PRODUCT Routes///
app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

app.post("/products", async (req, res) => {
  try {
    const { name, price, image, category } = req.body;
    const newProduct = new Product({ name, category, price, image });
    await newProduct.save();
    res.send("Item saved");
  } catch (err) {
    res.send(err);
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, category, image } = req.body;
    await Product.findByIdAndUpdate(id, { name, price, category, image });
    res.send("item updated");
  } catch (err) {
    res.send(err);
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.send("item removed!");
  } catch (err) {
    res.send(err);
  }
});

///ORDER routes///

app.get("/orders", async (req, res) => {
  const orders = await Order.find();
  res.send(orders);
});

app.post("/orders", async (req, res) => {
  const { basket, address, totalCost } = req.body;
  const date = new Date();
  const newOrder = new Order({ items: basket, cost: totalCost, date, address });
  await newOrder.save();
  res.send("ORDER SAVED");
});

///LISTEN for connections//

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
