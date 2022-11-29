const mongoose = require("mongoose");

/**
 * SuperUser
 *
 */
const ManagerSchema = mongoose.Schema({
  manager_name: {
    type: String,
  },
  pin: {
    type: String,
  },
  phone_number: {
    type: String,
  },
});

const Manager = new mongoose.model("Manager", ManagerSchema);

module.exports = { Manager };
