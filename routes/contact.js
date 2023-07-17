const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/contact", (req, res) => {
  res.render("contact", {path: "/contact"});
});

module.exports = {
  router: router,
};
