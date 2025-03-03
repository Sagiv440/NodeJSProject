const PORT = require("../settings/consts")
const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    startWorkingYear: Number,
    departmentId: { type: mongoose.Schema.Types.ObjectId, ref: PORT.DEPARTMENT_DB },
    workShifts: [
        { type: mongoose.Schema.Types.ObjectId, ref: PORT.SHIFT_DB }  // Reference to Shift model
    ]
})

//const employee = mongoose.model("employee", employeeSchema, PORT.EMPLOYEE_DB)

module.exports = employeeSchema;