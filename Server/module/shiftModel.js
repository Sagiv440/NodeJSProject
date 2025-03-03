const mongoose = require("mongoose");

const shiftSchema = new mongoose.Schema({
    date: String,
    staringHour: Number,
    endingHour: Number
})

//const shift = mongoose.model("shift", shiftSchema, "shiftsDB")

module.exports = shiftSchema;