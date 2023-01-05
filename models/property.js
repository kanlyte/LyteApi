const mongoose = require("mongoose");

/**
 * Property
 *
 */
const PropertySchema = mongoose.Schema({
  property_type: { type: String },
  tags_selected: { type: String },
  district: { type: String },
  location: { type: String },
  google_map_coordinates: { type: String },
  image_paths: { type: String },
});
const Property = new mongoose.model("Property", PropertySchema);

/**
 * Apartments...
 */
const ApartmentsSchema = mongoose.Schema({
  apartments_name: {
    type: String,
  },
  apartments_all: {
    type: String,
  },
  apartments_free: {
    type: String,
  },
  apartments_min_price: {
    type: String,
  },
  apartments_max_price: {
    type: String,
  },
  apartments_desc: {
    type: String,
  },
  property_id: {
    type: String,
  },
});
const Apartments = new mongoose.model("Apartments", ApartmentsSchema);

/**
 * Hotel
 */
const HotelSchema = mongoose.Schema({
  hotel_name: {
    type: String,
  },
  hotel_rooms_all: {
    type: String,
  },
  hotel_max_price: {
    type: String,
  },
  hotel_min_price: {
    type: String,
  },
  hotel_desc: {
    type: String,
  },
  property_id: {
    type: String,
  },
});
const Hotel = new mongoose.model("Hotel", HotelSchema);

/**
 * Hostel
 */
const HostelSchema = mongoose.Schema({
  hostel_name: {
    type: String,
  },
  hostel_rooms_all: {
    type: String,
  },
  hostel_rooms_free: {
    type: String,
  },
  hostel_rooms_nsf_free: {
    type: String,
  },
  hostel_rooms_sf_free: {
    type: String,
  },
  hostel_max: {
    type: String,
  },
  hostel_max_nsf: {
    type: String,
  },
  hostel_min_nsf: {
    type: String,
  },
  hostel_max_sf: {
    type: String,
  },
  hostel_min_sf: {
    type: String,
  },
  hostel_min: {
    type: String,
  },
  selected_prop: {
    type: String,
  },
  hostel_distance: {
    type: String,
  },
  property_id: {
    type: String,
  },
});
const Hostel = new mongoose.model("Hostel", HostelSchema);

/**
 * Rental House
 */
const Rental_House_Schema = mongoose.Schema({
  rental_house_bedrooms: {
    type: String,
  },
  rental_house_price: {
    type: String,
  },
  rental_house_desc: {
    type: String,
  },
  property_id: {
    type: String,
  },
});
const Rental_House = new mongoose.model("Rental_House", Rental_House_Schema);

/**
 * Guest House
 */
const Guest_House_Schema = mongoose.Schema({
  guest_house_name: {
    type: String,
  },
  guest_house_rooms_all: {
    type: String,
  },
  guest_house_max_price: {
    type: String,
  },
  guest_house_min_price: {
    type: String,
  },
  guest_house_desc: {
    type: String,
  },
  property_id: {
    type: String,
  },
});
const Guest_House = new mongoose.model("Guest_House", Guest_House_Schema);

/**
 * Business House
 */
const Business_House_Schema = mongoose.Schema({
  business_house_name: {
    type: String,
  },
  business_house_rooms_all: {
    type: String,
  },
  business_house_max_price: {
    type: String,
  },
  business_house_min_price: {
    type: String,
  },
  business_house_desc: {
    type: String,
  },
  property_id: {
    type: String,
  },
});
const Business_House = new mongoose.model(
  "Business_House",
  Business_House_Schema
);

module.exports = {
  Property,
  Apartments,
  Hotel,
  Hostel,
  Rental_House,
  Guest_House,
  Business_House,
};
