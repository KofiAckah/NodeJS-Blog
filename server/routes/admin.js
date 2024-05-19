const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const User = require("../models/User");

const adminLayout = "../views/layouts/admin";

// Get - Amdin ~ Login Page
router.get("/admin", async (req, res) => {
  try {
    const locals = {
      title: "Admin",
      description: "A simple blog made with NodeJS, ExpressJS and MongoDB",
    };

    res.render("admin/index", { locals, layout: adminLayout });
  } catch (error) {
    console.log(error);
  }
});

// Post - Admin ~ Check Login
router.post("/admin", async (res, req) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    res.redirect("/admin");
    // res.render("admin/index", { locals, layout: adminLayout });
  } catch (error) {
    console.log("this is an error");
  }
});

module.exports = router;
