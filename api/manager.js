const router = require("express").Router();

const {
  Apartments,
  Business_House,
  Guest_House,
  Hostel,
  Hotel,
  Property,
  Rental_House,
} = require("../models/property");

router.post("/new-property", async (req, res) => {
  try {
    const property = new Property({
      property_type: req.body.property_type,
      tags_selected: req.body.tags_selected,
      district: req.body.district,
      location: req.body.location,
      google_map_coordinates: req.body.google_map_coordinates,
      image_paths: req.body.image_paths,
      manager: req.body.manager,
    });

    const property_saved = await property.save();

    if (property_saved._id) {
      switch (req.body.property_type) {
        case "Apartments":
          const apartment = new Apartments({
            apartments_name: req.body.apartments_name,
            apartments_all: req.body.apartments_all,
            apartments_free: req.body.apartments_free,
            apartments_min_price: req.body.apartments_min_price,
            apartments_max_price: req.body.apartments_max_price,
            apartments_desc: req.body.apartments_desc,
            property_id: property_saved._id,
          });

          const apartment_saved = await apartment.save();
          res.send({
            status: true,
            result: apartment_saved,
          });

          break;

        case "Hotel":
          const hotel = new Hotel({
            hotel_name: req.body.hotel_name,
            hotel_rooms_all: req.body.hotel_rooms_all,
            hotel_max_price: req.body.hotel_max_price,
            hotel_min_price: req.body.hotel_min_price,
            hotel_desc: req.body.hotel_desc,
            property_id: property_saved._id,
          });

          const hotel_saved = await hotel.save();
          res.send({
            status: true,
            result: hotel_saved,
          });

          break;

        case "Hostel":
          const hostel = new Hostel({
            hostel_name: req.body.hostel_name,
            hostel_rooms_all: req.body.hostel_rooms_all,
            hostel_rooms_free: req.body.hostel_rooms_free,
            hostel_rooms_nsf_free: req.body.hostel_rooms_nsf_free,
            hostel_rooms_sf_free: req.body.hostel_rooms_sf_free,
            hostel_max: req.body.hostel_max,
            hostel_max_nsf: req.body.hostel_max_nsf,
            hostel_min_nsf: req.body.hostel_min_sf,
            hostel_max_sf: req.body.hostel_max_sf,
            hostel_min_sf: req.body.hostel_min_sf,
            hostel_min: req.body.hostel_min,
            selected_prop: req.body.selected_prop,
            hostel_distance: req.body.hostel_distance,
            property_id: property_saved._id,
          });

          const hostel_saved = await hostel.save();
          res.send({
            status: true,
            result: hostel_saved,
          });

          break;

        case "Rental House":
          const rental_house = new Rental_House({
            rental_house_bedrooms: req.body.rental_house_bedrooms,
            rental_house_price: req.body.rental_house_price,
            rental_house_desc: req.body.rental_house_desc,
            property_id: property_saved._id,
          });

          const rental_house_saved = await rental_house.save();
          res.send({
            status: true,
            result: rental_house_saved,
          });

          break;

        case "Guest House":
          const guest_house = new Guest_House({
            guest_house_name: req.body.guest_house_name,
            guest_house_rooms_all: req.body.guest_house_rooms_all,
            guest_house_max_price: req.body.guest_house_max_price,
            guest_house_min_price: req.body.guest_house_min_price,
            guest_house_desc: req.body.guest_house_desc,
            property_id: property_saved._id,
          });

          const guest_house_saved = await guest_house.save();
          res.send({
            status: true,
            result: guest_house_saved,
          });

          break;

        case "Business/Office":
          const business_house = new Business_House({
            business_house_name: req.body.business_house_name,
            business_house_rooms_all: req.body.business_house_rooms_all,
            business_house_max_price: req.body.business_house_max_price,
            business_house_min_price: req.body.business_house_min_price,
            business_house_desc: req.body.business_house_desc,
            property_id: property_saved._id,
          });

          const business_house_saved = await business_house.save();
          res.send({
            status: true,
            result: business_house_saved,
          });

          break;

        default:
          res.send({ status: false, reason: "ServerError" });

          break;
      }
    } else {
      res.send({ status: false, reason: "ServerError" });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, reason: "ServerError", result: error });
  }
});

router.get("/:manager_id/properties", async (req, res) => {
  try {
    const manager_properties = await Property.find({
      manager: { $eq: req.params.manager_id },
    });
    if (!manager_properties) {
      res.send({ status: false, reason: "ServerError" });
    } else if (manager_properties.length === 0) {
      res.send({ status: true, reason: [] });
    } else {
      let properties = [];
      manager_properties.forEach(async (el) => {
        if (el.property_type) {
          switch (el.property_type) {
            case "Apartments":
              const apartment = await Apartments.findOne({
                property_id: el._id,
              });
              if (apartment) {
                properties = [...properties, { ...el._doc, ...apartment._doc }];
              }
              break;

            case "Hotel":
              const hotel = await Hotel.findOne({ property_id: el._id });
              if (hotel) {
                properties = [...properties, { ...el._doc, ...hotel._doc }];
              }
              break;

            case "Hostel":
              const hostel = await Hostel.findOne({
                property_id: el._id,
              });
              if (hostel) {
                properties = [...properties, { ...el._doc, ...hostel._doc }];
              }
              break;

            case "Rental House":
              const rental_house = await Rental_House.findOne({
                property_id: el._id,
              });
              if (rental_house) {
                properties = [
                  ...properties,
                  { ...el._doc, ...rental_house._doc },
                ];
              }
              break;

            case "Guest House":
              const guest_house = await Guest_House.findOne({
                property_id: el._id,
              });
              if (guest_house) {
                properties = [
                  ...properties,
                  { ...el._doc, ...guest_house._doc },
                ];
              }
              break;

            case "Business/Office":
              const business_house = await Business_House.findOne({
                property_id: el._id,
              });
              if (business_house) {
                properties = [
                  ...properties,
                  { ...el._doc, ...business_house._doc },
                ];
              }

              break;

            default:
              res.send({ status: false, reason: "ServerError" });

              break;
          }
        }
        if (manager_properties.indexOf(el) === manager_properties.length - 1) {
          res.send({ status: true, result: properties });
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, reason: "ServerError", result: error });
  }
});

module.exports = router;
