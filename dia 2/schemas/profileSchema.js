//Import mongoose
const mongoose = require("mongoose");

//Profile Schema
const ProfileSchema = new mongoose.Schema ({
    name: String,
    surname: String,
    dateOfBirth: Date,
    comments: String,
    role: {
        type: String,
        enum: ["admin", "usuario"]
    }
});




//Export
module.exports = mongoose.model("Profile", ProfileSchema);