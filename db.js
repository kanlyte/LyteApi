const mongoose = require("mongoose");
require("dotenv/config");

const conn = () => {
  mongoose
    .connect(
      "mongodb+srv://kanlyte:QLu3y7Yp774fW1Yw@cluster0.5li3mdy.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Database Connected.....");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = conn;
