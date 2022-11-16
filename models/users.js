const mongoose = require("mongoose");

/**
 * super user
 */
const CategorySchema = mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  category_date: {
    type: Date,
    default: Date.now,
  },
});

const Category = new mongoose.model("Categories", CategorySchema);

module.exports = {};
