// server.js
const express = require("express");
// const path = require("path");
const serveStatic = require("serve-static");

let app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
