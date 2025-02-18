const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shiftSchema = new mongoose.Schema({
    date: String,
    staringHour: String,
    endingHour: Number
})

const shift = mongoose.model("shift", shiftSchema, "shiftsDB")

module.exports = shift;