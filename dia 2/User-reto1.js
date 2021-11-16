//Import mongoose
const mongoose = require("mongoose");


// SCHEMA CON VALIDADORES

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





module.exports = mongoose.model("User", UserSchema)
