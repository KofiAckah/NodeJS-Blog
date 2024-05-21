require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const cookiePaser = require("cookie-parser");
const MongoStore = require("connect-mongo");
const session = require("express-session");

const connectDB = require("./server/config/db");

const app = express();
const PORT = 3003 || process.env.PORT;

// Checking if I have connect to the DB
connectDB();

// Using the middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookiePaser());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGOBD_URI,
    }),
  })
);

// Static files
app.use(express.static("public"));

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("layout", "layouts/main");

app.use("/", require("./server/routes/main"));
app.use("/", require("./server/routes/admin"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
