const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://DanielVillarroel:1Longboard%40@cluster0.tdhdk.mongodb.net/supreme-computer-lg?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const userSeed = [
  {
    firstName: "Daniel",
    lastName: "Villarroel",
    username: "davSkater",
    password: 12345,
    email: "dv@dv.com",
  },
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
