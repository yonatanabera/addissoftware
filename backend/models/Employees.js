const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  birthday: {
    type: Date,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  salary: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("Employee", EmployeeSchema);
