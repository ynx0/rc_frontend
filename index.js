"use strict";
const express = require("express");
const path = require("path");
// const PORT = process.env.PORT || 5000;
const PORT = 5000;

// from heroku base
const app = express();
const router = express.Router();
router.get("/", (req, res) => res.sendFile("index.html"));


app
    // .use(express.static(path.join("../", "files"))) // needed for subdomain integration
    .use(express.static(path.join(__dirname, "static")))
    .use(router);

// app.set('view engine', 'ejs');
// app.set("views", path.join(__dirname, "files", "views"));


// exports.app = app;
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
