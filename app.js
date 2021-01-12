const express = require("express");
const app = express();
/// ^^^EXPRESS IMPORT AND INITIATION^^^///

/// package imports ///
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const flash = require("connect-flash");
const connectDB = require("./config/db");

///connect to MONGODB ///
connectDB();

/// MAIN ROUTES ///

app.get("/products", (req, res) => {
  ///GET PRODUCTS LIST FROM DB
});

app.post("/products", (req, res) => {
  ///ADD PRODUCTS TO DB
});

app.put("/products", (req, res) => {
  ///EDIT PRODUCTS IN DB
});

app.post("/products", (req, res) => {
  ///ADD ORDERS TO DB
});

///LISTEN for connections//

const PORT = PROCESS.ENV.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
