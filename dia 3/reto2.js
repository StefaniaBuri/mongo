//Reto
const mongoose = require("mongoose");
const User = require("./UserSchema");
const Photos = require("./PhotoSchema");

//Conecto con la BBDD de Mongo
mongoose.connect("mongodb://localhost:27017/mongo", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

//Creo documentos basados en cada modelo

let user1 = new User({
    login: "Mia0405",
    password: "mipassword",
    name: "Mia",
    surname: "Colucci",
    dateOfBirth: 1999-09-23,
    comments: "Me gusta correr",
    role: "user",
    address: "Calle diagonal nº124",
    phone: 600566900,
    email: "micd@gmail.com",
    follow: "Esther_22"
});
let user2 = new User({
    login: "Ana-ly",
    password: "passsword12345",
    name: "Ana",
    surname: "Gomez",
    dateOfBirth: 1989-04-03,
    comments: "Soy Profesora",
    role: "admin",
    address: "Calle girasol nº10",
    phone: 633566988,
    email: "ana-ly@gmail.com",
    follow: "peco_32"
});
let user3 = new User ({
    login: "Erne22",
    password: "12345877.",
    name: "Ernesto",
    surname: "Carrera",
    dateOfBirth: 2009-03-22,
    comments: "Soy cocinero",
    role: "user",
    address: "Calle mandarina nº2",
    phone: 600511900,
    email: "erni2@gmail.com",
    follow: "Pedro23"
});
let user4 = new User({
    login: "Juan-luis",
    password: "contraseña1234",
    name: "Juan",
    surname: "Escobar",
    dateOfBirth: 1982-01-23,
    comments: "Soy musico",
    role: "admin",
    address: "Calle cielo nº31",
    phone: 622800400,
    email: "juju@gmail.com",
    follow: "Erne22"
});


let photo1 = new Photos({
    nombreUsuario: "Ana_ly",
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.taranna.com%2Fque-tipo-de-viajero-eres%2F&psig=AOvVaw3jU9pQDL6qRy36FXx3Isik&ust=1637187523053000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJCkkIr1nfQCFQAAAAAdAAAAABAa",
    titulo: "explorando",
    descripcion: "juntosForever"
});

let photo2 = new Photos({
    nombreUsuario: "Esther_22",
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmediterrani.com%2Ftipos-de-viajeros%2Ftipos-de-viajeros%2F&psig=AOvVaw3jU9pQDL6qRy36FXx3Isik&ust=1637187523053000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJCkkIr1nfQCFQAAAAAdAAAAABAJ",
    titulo: "pareja",
    descripcion: "juntoForever"
});
let photo3 = new Photos({
    nombreUsuario: "Mari-luz",
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Felviajerodespistado.com%2Ftipos-viajeros%2F&psig=AOvVaw3jU9pQDL6qRy36FXx3Isik&ust=1637187523053000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJCkkIr1nfQCFQAAAAAdAAAAABAP",
    titulo: "amigos",
    descripcion: "Viaje con amigos"
});
let photo4 = new Photos({
    nombreUsuario: "Mari-luz",
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.marketingdirecto.com%2Fmarketing-general%2Ftendencias%2Flas-5-reglas-oro-los-viajeros-hiperconectados&psig=AOvVaw3jU9pQDL6qRy36FXx3Isik&ust=1637187523053000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJCkkIr1nfQCFQAAAAAdAAAAABAU",
    titulo: "Libertad",
    descripcion: "Vivir la vida"
});




//Insertamos todos los documentos, de los modelos User y Photo

User.insertMany([user1, user2, user3, user4])
    .then(function()
    {
        console.log("Documento guardado correctamente");
        mongoose.disconnect();
    })
    .catch(function (err)
    {
        console.log(err);
        mongoose.disconnect();
    })


Photos.insertMany([photo1, photo2, photo3, photo4])
    .then(function(data)
    {
        console.log("Photos guardadas correctamente");
        console.log(data);
        mongoose.disconnect();
    })
    .catch(function (err)
    {
        console.log(err);
        mongoose.disconnect();
    })


User.find({})
    .then(function(data)
    {
        console.log("Photos guardadas correctamente");
        console.log(data);
        mongoose.disconnect();
    })
    .catch(function (err)
    {
        console.log(err);
        mongoose.disconnect();
    })


// Actualizo la info sobre usuarios y fotos
User.updateMany({login: "Juan-luis"}, {photos: ["619432b9aec3bb581c156e98"]})
    .then(function(data)
    {
        console.log("Photos guardadas correctamente");
        console.log(data);
        mongoose.disconnect();
    })
    .catch(function (err)
    {
        console.log(err);
        mongoose.disconnect();
    })

User.updateMany({login: "Esther_22"}, {photos: ["619432b9aec3bb581c156e97", "619300866b74bfd5882c9345", "619432b9aec3bb581c156e96"]})
    .then(function(data)
    {
        console.log("Photos guardadas correctamente");
        console.log(data);
        mongoose.disconnect();
    })
    .catch(function (err)
    {
        console.log(err);
        mongoose.disconnect();
    })


Photos.updateOne({_id: "619432b9aec3bb581c156e95"}, {usuario: "61942fdad8d332a5eed03b99"})
    .then(function(data)
    {
        console.log("Photos actualizada correctamente");
        console.log(data);
        mongoose.disconnect();
    })
    .catch(function (err)
    {
        console.log(err);
        mongoose.disconnect();
    })

Photos.updateOne({_id: "619432b9aec3bb581c156e97"}, {usuario: "61942fdad8d332a5eed03b98"})
    .then(function(data)
    {
        console.log("Photos actualizada correctamente");
        console.log(data);
        mongoose.disconnect();
    })
    .catch(function (err)
    {
        console.log(err);
        mongoose.disconnect();
    })

Photos.updateOne({_id: "619432b9aec3bb581c156e96"}, {usuario: "61942fdad8d332a5eed03b97"})
    .then(function(data)
    {
        console.log("Photos actualizada correctamente");
        console.log(data);
        mongoose.disconnect();
    })
    .catch(function (err)
    {
        console.log(err);
        mongoose.disconnect();
    })

Photos.updateOne({_id: "619432b9aec3bb581c156e98"}, {usuario: "61942fdad8d332a5eed03b96"})
    .then(function(data)
    {
        console.log("Photos actualizada correctamente");
        console.log(data);
        mongoose.disconnect();
    })
    .catch(function (err)
    {
        console.log(err);
        mongoose.disconnect();
    })


// Busqueda de una foto y dar información sobre el usuario
Photos.find({titulo: "explorando"}).populate("usuario")
    .then(function(data)
    {
        console.log("Información sobre la foto y el usuario", data);
        mongoose.disconnect();
    })
    .catch(function (err)
    {
        console.log(err);
        mongoose.disconnect();
    })


//Actualizo la información de los seguidores
User.updateOne({login: "Juan-luis"}, {follows: ["61931d5ee735b191b41cd59d", "61931d5ee735b191b41cd59c", "61931d5ee735b191b41cd59e"]})
    .then(function(data)
    {
        console.log("Actualización de los follows", data);
        
    })
    .catch(function (err)
    {
        console.log(err);
        
    })

User.updateOne({login: "Ana-ly"}, {follows: ["61942fdad8d332a5eed03b99", "61931d5ee735b191b41cd59e"]})
    .then(function(data)
    {
        console.log("Actualización de los follows", data);
       
    })
    .catch(function (err)
    {
        console.log(err);
     
    })

User.updateOne({login: "Mia0405"}, {follows: ["61931d5ee735b191b41cd59f"]})
    .then(function(data)
    {
        console.log("Actualización de los follows", data);
        
    })
    .catch(function (err)
    {
        console.log(err);
       
    })

User.updateOne({login: "Esther_22"}, {follows: ["61931d5ee735b191b41cd59f", "61942fdad8d332a5eed03b99", "61931d5ee735b191b41cd59c"]})
    .then(function(data)
    {
        console.log("Actualización de los follows", data);
      
    })
    .catch(function (err)
    {
        console.log(err);
        mongoose.disconnect();
    })


//Mostrar fotos de los usuarios que seguimos
async function mostrarTimeLine(id) {
    User.find({_id: id})
    .populate({
    "path" : "follows",
    "populate" : {
        "path": "photos"
    }})
    .then(function(data)
    {
        console.log(data[0].follows[0]);
        console.log("Actualización de los follows", data);
        // mongoose.disconnect();
    })
    .catch(function (err)
    {
        console.log(err);
        mongoose.disconnect();
    })
}

mostrarTimeLine("61942fdad8d332a5eed03b99")