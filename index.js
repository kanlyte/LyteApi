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
 * database
 */
conn();

/**
 * Server
 */
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}....`);
});
