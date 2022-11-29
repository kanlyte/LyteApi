const router = require("express").Router();

const { Location, Region } = require("../models/admin");

/**
 *
 * registers a new region
 */
router.post("/region/new", async (req, res) => {
  const region_check = await Region.findOne({
    region_name: { $eq: req.body.region_name },
  });
  if (region_check) {
    res.send({ reason: "Region Exits", status: false });
  } else {
    const region = new Region({
      region_name: req.body.region_name,
    });
    try {
      const region_saved = await region.save();
      res.send({
        status: true,
        result: region_saved,
      });
    } catch (error) {
      console.log(error);
      res.send({ status: false, reason: "ServerError" });
    }
  }
});

/**
 * registers a new location
 *
 *
 */
router.post("/location/new", async (req, res) => {
  const location_check = await Location.findOne({
    location_name: { $eq: req.body.location_name },
  });
  if (location_check) {
    res.send({ reason: "Location Exits", status: false });
  } else {
    const location = new Location({
      location_name: req.body.location_name,
      region: req.body.region,
    });
    try {
      const location_saved = await location.save();
      res.send({
        status: true,
        result: location_saved,
      });
    } catch (error) {
      console.log(error);
      res.send({ status: false, reason: "ServerError" });
    }
  }
});

/**
 *
 * gets all regions
 */
router.get("/region/all", async (req, res) => {
  try {
    const regions = await Region.find();
    res.send({ result: regions, status: true });
  } catch (error) {
    console.log(error);
    res.send({ status: false, reason: "ServerError" });
  }
});

module.exports = router;
