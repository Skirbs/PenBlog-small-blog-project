const path = require("path");
const express = require("express");
const router = express.Router();

const createData = require("./create");

router.use("/", (req, res) => {
  const idIndex = createData.blogData.blogID.indexOf(req.body.ID);
  if (idIndex === -1) {
    res.redirect("../404");
    return;
  }
  res.render("blog", {
    title: "Blog",
    path: "/blog",
    blogTitles: createData.blogData.blogTitle,
    blogDesc: createData.blogData.blogDesc,
    blogCurrentId: idIndex,
  });
});

module.exports = {
  router: router,
};

/* Shorted the description */
