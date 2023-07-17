const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
router.use(bodyParser.urlencoded({extended: false}));

const blogs = {blogTitle: [], blogDesc: [], blogID: []};

router.get("/create", (req, res) => {
  res.render("create", {title: "Create Blog", path: "/create"});
});

router.post("/create", (req, res) => {
  blogs.blogTitle.push(req.body.blogTitle);
  blogs.blogDesc.push(req.body.blogDesc);
  blogs.blogID.push(Math.random().toString(36).slice(2, -1));
  console.log(blogs);
  res.redirect("/");
});

module.exports = {
  router: router,
  blogData: blogs,
};
