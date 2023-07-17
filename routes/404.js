const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/404", (req, res) => {
  res.status(404).render("404", {title: "Not Found", path: "/404"});
});

router.use("/", (req, res) => {
  res.redirect("/404");
});

module.exports = {
  router: router,
};
