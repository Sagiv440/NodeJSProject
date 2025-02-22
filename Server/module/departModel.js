const mongoose = require("mongoose");
const PORT = require("../settings/consts")

const departSchema = new mongoose.Schema({
    name: String,
    manager: Number
})

const department = mongoose.model("department", departSchema, PORT.DEPARTMENT_DB)

module.exports = department;