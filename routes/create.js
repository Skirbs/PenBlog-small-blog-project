const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
router.use(bodyParser.urlencoded({extended: false}));

const blogs = {blogTitle: [], blogDesc: []};

router.get("/create", (req, res) => {
  res.render("create", {title: "Create Blog", path: "/create"});
});

router.post("/create", (req, res) => {
  blogs.blogTitle.push(req.body.blogTitle);
  blogs.blogDesc.push(req.body.blogDesc);
  console.log(blogs);
  res.redirect("/create");
});

module.exports = {
  router: router,
  blogData: blogs,
};
