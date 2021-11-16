//Import mongoose
const mongoose = require("mongoose");

//Creo el 1º Schema
const PhotosSchema = new mongoose.Schema(
    {
        usuario: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        url: {
            type: String,
            validate: [
                function(url) {
                    return url.includes("https://");
                }, 
                "La url no es correcta"
            ]
        },
        titulo: String,
        descripcion: String
    }
)

//Export
module.exports = mongoose.model("Photo", PhotosSchema);