const path = require("path");
const express = require("express");
const router = express.Router();

const createData = require("./create");

router.get("/", (req, res) => {
  res.render("home", {title: "Home", path: "/", blogData: createData.blogData});
});

module.exports = {
  router: router,
};
