const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const User = require("../models/User");

const adminLayout = "../views/layouts/admin";

// Get ~ Admin ~ Login Page
router.get("/admin", async (req, res) => {
  try {
    const locals = {
      title: "Admin",
      description: "A simple blog made with NodeJS, ExpressJS and MongoDB",
    };
    res.render("admin/index", { locals, layout: adminLayout });
  } catch (error) {
    console.log(error);
    console.log("An Error");
  }
});

router.post("/admin", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);

    res.redirect("/admin");
  } catch (error) {
    console.log(error);
    console.log("An Error 2");
  }
});

module.exports = router;
