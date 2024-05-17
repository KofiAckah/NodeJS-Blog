const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Routes
router.get("", async (req, res) => {
  try {
    const locals = {
      title: "NodeJS Blog",
      description: "A simple blog made with NodeJS, ExpressJS and MongoDB",
    };

    let perPage = 10;
    let page = req.query.page || 1;

    const data = await Post.aggregate([{ $sort: { createdAt: -1 } }])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec();

    const count = await Post.countDocuments({});
    const nextPage = parseInt(page) + 1;
    const hasNextPage = nextPage <= Math.ceil(count / perPage);

    res.render("index", {
      locals,
      data,
      current: page,
      nextPage: hasNextPage ? nextPage : null,
      currentRoute: "/",
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});

module.exports = router;

// If you don't want it to show in 10 by 10
// router.get("", async (req, res) => {
//   const locals = {
//     title: "NodeJS Blog",
//     description: "A simple blog made with NodeJS, ExpressJS and MongoDB",
//   };
//   try {
//     const data = await Post.find();
//     res.render("index", { locals, data });
//   } catch (error) {
//     console.log(error);
//   }
// });
