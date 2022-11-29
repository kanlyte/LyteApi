const mongoose = require("mongoose");

/**
 * REgion Schema
 *
 */
const RegionSchema = mongoose.Schema({
  region_name: {
    type: String,
  },
});

const Region = new mongoose.model("Region", RegionSchema);

/**
 * Location Schema
 *
 */
const LocationSchema = mongoose.Schema({
  location_name: {
    type: String,
  },
  region: {
    type: String,
  },
});

const Location = new mongoose.model("Location", LocationSchema);

module.exports = { Location, Region };
