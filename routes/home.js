const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", {path: "/"});
});

module.exports = {
  router: router,
};
