//Import mongoose
const mongoose = require("mongoose");

//Credentials Schema
const CredentialsSchema = new mongoose.Schema({
    address: String,
    phone: {
        type: Number,
        min: 600000000,
        max: 700000000
    },
    email: {
        type: String
    } 
});


//------ MIDDLEWARE------

CredentialsSchema.pre("save", function (next) 
{
    console.log("Middleware email");
    if (this.email.includes("@") && this.email.includes(".com") && !this.email.includes(" "))
    {
        console.log("Email introducido correcto");
        next();
    }
    else {
        console.log("El email introducido no es válido");
    }
})


//Export
module.exports = mongoose.model("Credentials", CredentialsSchema);