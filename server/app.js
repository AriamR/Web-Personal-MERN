const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const { API_VERSION } = require("./config");

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

//configure Header HTTP



//Route Basic


module.exports = app;
