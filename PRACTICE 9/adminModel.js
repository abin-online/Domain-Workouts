const mongoose = require("mongoose");

// Define the Admin schema
const AdminSchema = new mongoose.Schema({
    email: { type: String },
    password: { type: String },
    role: { type: String, default: "admin" }
});

// Create the Admin model
const adminModel = mongoose.model("admin", AdminSchema);

module.exports = adminModel;
