require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const connectDB = require("./server/config/db");

const app = express();
const PORT = 3003 || process.env.PORT;

// Checking if I have connect to the DB
connectDB();

// Static files
app.use(express.static("public"));

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("layout", "layouts/main");

app.use("/", require("./server/routes/main"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
