const router = require("express").Router();

const { Manager } = require("../models/users");

/**
 * 
 * adds new super user from app
//  */
router.post("/manager/new", async (req, res) => {
  const phone_check = await Manager.findOne({
    phone_number: { $eq: req.body.phone_number },
  });
  if (phone_check) {
    res.send({ reason: "Phone Number Used", status: false });
  } else {
    const manager = new Manager({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone_number: req.body.phone_number,
      pin: req.body.pin,
      manager_type: req.body.manager_type, //hotelmanager,landlord
    });
    try {
      const manager_saved = await manager.save();
      res.send({
        status: true,
        result: manager_saved,
      });
    } catch (error) {
      console.log(error);
      res.send({ status: false, reason: "ServerError", result: error });
    }
  }
});

module.exports = router;
