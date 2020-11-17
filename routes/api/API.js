const router = require("express").Router();
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

const db = require("../../models");
const { Error } = require("mongoose");

router.get("/users", function (req, res) {
  db.User.find({}, function (err, data) {
    if (err) console.log(err);
    else {
      console.log(data);
      res.send(data);
    }
  });
});

router.post("/appointments", (req, res) => {
  db.Appointments.create(req.body)
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
}),
  router.get("/appointments", function (req, res) {
    db.Appointments.find({}, function (err, data) {
      if (err) console.log(err);
      else {
        console.log(data);
        res.send(data);
      }
    });
  });
router.post("/", passport.authenticate("local"), (req, res) => {
  res.json({
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    id: req.user._id,
  });
});

router.post("/signup", (req, res) => {
  db.User.findOne({ email: req.body.email }, async (err, doc) => {
    if (err) throw err;
    console.log(err);
    if (doc) res.send("User Already Exists");
    if (!doc) {
      /* const hashedPassword = await bcrypt.hash(req.body.password, 10); */

      const newUser = new db.User({
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});

module.exports = router;
