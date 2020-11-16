const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointments = new Schema({
  email: {
    type: String,
    trim: true,
  },

  appointmentType: {
    type: String,
    trim: true,
  },
  date: {
    type: String,
    trim: true,
  },

  boolean: Boolean,

  array: Array,
});

const Appointments = mongoose.model("Appointments", appointments);

module.exports = Appointments;
