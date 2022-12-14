const router = require("express").Router();

const { Manager } = require("../models/users");

/**
 * 
 * adds new manager 
//  */
router.post("/manager/new", async (req, res) => {
  const phone_check = await Manager.findOne({
    phone_number: { $eq: req.body.phone_number },
  });
  if (phone_check) {
    res.send({ reason: "Phone Number Used", status: false });
  } else {
    try {
      const manager = new Manager({
        manager_name: req.body.manager_name,
        phone_number: req.body.phone_number,
        pin: req.body.pin,
      });

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

/**
 *
 * signs in new manager
 */

router.post("/manager/login", async (req, res) => {
  try {
    const manager_check = await Manager.findOne({
      $and: [{ pin: req.body.pin }, { phone_number: req.body.phone_number }],
    });
    manager_check
      ? res.send({ result: manager_check, status: true })
      : res.send({ status: false, reason: "WrongDetails" });
  } catch (error) {
    console.log(error);
    res.send({ status: false, reason: "ServerError" });
  }
});

router.get("/sms/send_code/:phone", async (req, res) => {
  try {
    const phone_check = await Manager.findOne({
      phone_number: { $eq: req.params.phone },
    });
    if (phone_check) {
      res.send({ reason: "Phone Number Used", status: false });
    } else {
      /**
       *
       * SMS code api request
       */

      res.send({ result: "7845", status: true });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, reason: "ServerError" });
  }
});

module.exports = router;
