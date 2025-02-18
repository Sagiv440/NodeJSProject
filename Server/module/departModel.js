const mongoose = require("mongoose");

const departSchema = new mongoose.Schema({
    name: String,
    manager: Number
})

const depart = mongoose.model("depart", departSchema, "departDB")

module.exports = depart;