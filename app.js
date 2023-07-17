const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));
app.set("view engine", "ejs");

const homeData = require("./routes/home");
const createData = require("./routes/create");
const contactData = require("./routes/contact");
const blogData = require("./routes/blog");
const notFoundData = require("./routes/404");

app.use(homeData.router);
app.use(createData.router);
app.use(contactData.router);
app.use("/blog", blogData.router);
app.use(notFoundData.router);

app.listen(3000);
