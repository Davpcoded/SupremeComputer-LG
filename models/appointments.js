const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointments = new Schema({
  description: {
    type: String,
    trim: true,
  },

  location: {
    type: Array,
    trim: true,
  },

  category: {
    type: String,
    trim: true,
  },

  boolean: Boolean,

  array: Array,
});

const Appointments = mongoose.model("Appointments", appointments);

module.exports = Appointments;
