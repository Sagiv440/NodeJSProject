const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    fullName: String,
    numOfAction: Number
})

const users = mongoose.model("user", usersSchema, "usersDB")

module.exports = users;