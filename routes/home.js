const path = require("path");
const express = require("express");
const router = express.Router();

const createData = require("./create");
const externalFunc = require("../scripts/Functions");
const shortenedDesc = [];

router.get("/", (req, res) => {
  const listLength = createData.blogData.blogTitle.length;
  console.log(createData.blogData.blogTitle.length);
  if (listLength > 0) {
    shortenedDesc.push(externalFunc.shorten(createData.blogData.blogDesc[listLength - 1], 50));
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
