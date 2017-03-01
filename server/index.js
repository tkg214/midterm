"use strict";

// Basic express setup:

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
const fn = require("./lib/functions.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const postRoute = require("./routes/post")(fn);


app.use("/posts", postRoute);

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});