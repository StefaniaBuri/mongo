const mongoose = require("mongoose");
let User = require("./User-reto1");
let Profile = require("./schemas/profileSchema");
let Credentials = require("./schemas/credentialsSchema");

mongoose.connect("mongodb://localhost:27017/mongo",
                {useNewUrlParser: false, useUnifiedTopology: false })


//Creo documentos basados en el schema user
let user1 = new User({
    login: "Ernesto2344",
    password: "mipas",

});

let user2 = new User({
    login: "Miguel03",
    password: "mipasssword1234",
});

let user3 = new User ({
    login: "Sonia_12",
    password: "12345877.",
});

let user4 = new User({
    login: "Carlos23",
    password: ". 1234",
});

user4.save(checkRespuesta)
//Callback para saber si se ha guardado correctamente
function checkRespuesta(err,res){
    if(err)
     console.log("Error: " + err)
    else{
     console.log("Documento guardado correctamente")
     console.log(res)
     mongoose.disconnect();
    }
}


//Creo documentos basados en el schema profile

let profile1 = new Profile({
    name: "Juan",
    surname: "Perez",
    dateOfBirth: 1999-09-23,
    comments: "Hago senderismo",
    role: "profesor",
});

let profile2 = new Profile({
    name: "Maria",
    surname: "Gomez",
    dateOfBirth: 1989-04-03,
    comments: "Como muchos dulces",
    role: "admin",
});

let profile3 = new Profile ({
    name: "Esther",
    surname: "Diaz",
    dateOfBirth: 2009-03-22,
    comments: "Toco el piano",
    role: "estudiante",
});
let profile4 = new Profile({
    name: "Pedro",
    surname: "Esteban",
    dateOfBirth: 1982-01-23,
    comments: "Me gusta bailar",
    role: "usuario",
});

profile1.save(checkRespuesta)

function checkRespuesta(err,res){
    if(err)
     console.log("Error: " + err)
    else{
     console.log("Documento guardado correctamente")
     console.log(res)
     mongoose.disconnect();
    }
}


//Creo documentos basados en el schema credentials
let credentials1 = new Credentials({
    address: "Calle tulipan nº4",
    phone: 600566900,
    email: "nr.rd@uk.com",
});

let credentials2 = new Credentials({
    address: "Calle rosa nº10",
    phone: 633566988,
    email: "sandratheboss@sandraboss.com",
});

let credentials3 = new Credentials ({
    address: "Calle boltaña nº45",
    phone: 600511900,
    email: "neerd2@geek.com",
});
let credentials4 = new Credentials({
    address: "Calle sinfin nº1",
    phone: 622800400,
    email: "pedrotheboss@pedroboss.com",
});

credentials1.save(checkRespuesta)

function checkRespuesta(err,res){
    if(err)
     console.log("Error: " + err)
    else{
     console.log("Documento guardado correctamente")
     console.log(res)
     mongoose.disconnect();
    }
}
