const mongoose = require("mongoose");

/**
 * SuperUser
 *
 */
const ManagerSchema = mongoose.Schema({
  name: {
    type: String,
  },
  pin: {
    type: String,
  },
  phone_number: {
    type: String,
  },
  manager_type: {
    type: String,
  },
});

const Manager = new mongoose.model("Manager", ManagerSchema);

module.exports = { Manager };
