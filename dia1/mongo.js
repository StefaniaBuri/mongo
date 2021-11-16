const mongoose = require("mongoose");
let User = require("./schema");
let Profile = require("./schema");
let Credentials = require("./schema");

mongoose.connect("mongodb://localhost:27017/mongo",
                {useNewUrlParser: false, useUnifiedTopology: false }) 
                

let userDocument = new User({
    login: "nia",
    password: "0506",
});

userDocument.save(checkRespuesta)

function checkRespuesta(err,res){
    if(err)
     console.log("Error: " + err)
    else{
     console.log("Documento guardado correctamente")
     console.log(res)
    }
}


let profileDocument = new Profile({
    name:"Andre",
    surname: "Custodio",
    dateOfBirth:"08/07/1991",
    comments:"Me gusta tocar la guitarra",
    role:"admin"
});

profileDocument.save(checkRespuesta)

function checkRespuesta(err,res){
    if(err)
     console.log("Error: " + err)
    else{
     console.log("Documento guardado correctamente")
     console.log(res)
    }
}


let credentialsDocument = new Credentials({
    address:"c/Boltaña 3",
    phone: "074732789",
    email:"andre@gmail.com"
});

credentialsDocument.save(checkRespuesta)

function checkRespuesta(err,res){
    if(err)
     console.log("Error: " + err)
    else{
     console.log("Documento guardado correctamente")
     console.log(res)
    }
}

