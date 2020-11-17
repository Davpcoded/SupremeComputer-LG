import axios from "axios";

export default {
  // Gets all events
  getAppointments: function () {
    return axios.get("/api/appointments");
  },
};
