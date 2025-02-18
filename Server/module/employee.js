const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    startWorkingYear: Number,
    departmentId: Number
})

const employee = mongoose.model("employee", departSchema, "employeesDB")

module.exports = employee;