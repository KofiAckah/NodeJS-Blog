const express = require("express");
const router = express.Router();

// Routes
router.get("", (req, res) => {
  const locals = {
    title: "NodeJS Blog",
    description: "A simple blog made with NodeJS, ExpressJS and MongoDB",
  };
  res.render("index", { locals });
});

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
