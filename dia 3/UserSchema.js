//Import mongoose
const mongoose = require("mongoose");

//User Schema
const UserSchema = new mongoose.Schema ({
    login: String,

    password: {
        type: String,
        validate: [
            function(password){
                return password.length >= 6;
            },
            "El password debe tener más de 8 caracteres y sin espacios"]
    },

    name: String,
    surname: String,
    dateOfBirth: Date,
    comments: String,

    role: {
        type: String,
        enum: ["admin", "user"]
    },

    address: String,
    phone: {
        type: Number,
        min: 600000000,
        max: 700000000
    },

    email: String,

    follows: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],

    photos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Photo"
    }]
});


//------ MIDDLEWARE------
UserSchema.pre("save", function (next)
{
    console.log("Middleware password");
        if (this.password.length > 8 && !this.password.includes(" ")) {
            console.log("Password correcta");
            return true;
        }
        else {
            return false;
        }
    
})

//Middleware email
UserSchema.pre("save", function (next) 
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
module.exports = mongoose.model("User", UserSchema);