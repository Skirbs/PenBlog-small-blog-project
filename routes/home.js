const path = require("path");
const express = require("express");
const router = express.Router();

const createData = require("./create");
const shortenString = require("../scripts/shortenString");
const shortenedDesc = [];

router.get("/", (req, res) => {
  for (let i = 0; i < createData.blogData.blogDesc.length; i++) {
    shortenedDesc.push(shortenString.shorten(createData.blogData.blogDesc[i], 50));
  }
  res.render("home", {
    title: "Home",
    path: "/",
    blogTitles: createData.blogData.blogTitle,
    blogDesc: createData.blogData.blogDesc,
    shortendBlogDesc: shortenedDesc,
    blogID: createData.blogData.blogID,
  });
});

module.exports = {
  router: router,
};

/* Shorted the description */
