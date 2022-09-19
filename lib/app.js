const express = require("express");
const app = express();
const morgan = require("morgan");

module.exports = app;

//logging middleware
app.use(morgan("dev"));

//body parsing middleware
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});
