const express = require("express");
const cors = require("cors");
const conn = require("./db");
const PORT = process.env.PORT || 8000;

const app = express();

/**
 * Middleware
 */
app.use(cors());
app.use(express.json());
app.use("/app/", require("./api/mobile"));

/**
 *
 * home
 */
app.get("/", (req, res) => {
  res.send("What do you really want here?");
});

/**
 *
 * database
 */
conn();

/**
 *
 * 404
 */
app.use((req, res, next) => {
  res.status(404);
  res.send("404");
});

/**
 * Server
 */
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}....`);
});
