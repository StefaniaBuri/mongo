//Reto 2 
const mongoose = require("mongoose");
const User = require("./schemas/UserSchema");
const Photos = require("./schemas/PhotosSchema");

//Conectar con la BBDD de Mongo
mongoose.connect("mongodb://localhost:27017/mongo", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

//Creo documentos con schema user
let user1 = new User({
    login: "Juan2344",
    password: "mipassword",
    name: "Juan",
    surname: "Perez",
    dateOfBirth: 1999-09-23,
    role: "admin",
    address: "Calle tulipan nº4",
    phone: 600566900,
    email: "jupe@uk.com",
    follow: "Juan_22"
});
let user2 = new User({
    login: "Maria03",
    password: "mipasssword1234",
    name: "Maria",
    surname: "Gomez",
    dateOfBirth: 1989-04-03,
    role: "usuario",
    address: "Calle silfide nº10",
    phone: 633566988,
    email: "mariatheboss@mariaboss.com",
    follow: "MariGo_04"
});
let user3 = new User ({
    login: "Esther_22",
    password: "12345877.",
    name: "Esther",
    surname: "Diaz",
    dateOfBirth: 2009-03-22,
    role: "usuario",
    address: "Calle cartagena nº34",
    phone: 600511900,
    email: "estdi@cok.com",
    follow: "esther23"
});
let user4 = new User({
    login: "Pedro23",
    password: "contraseña1234",
    name: "Pedro",
    surname: "Esteban",
    dateOfBirth: 1982-01-23,
    role: "admin",
    address: "Calle lucre nº21",
    phone: 622800400,
    email: "pedrotheboss@pedroboss.com",
    follow: "peco_32"
});

// user4.save(checkRespuesta)
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

//Creo documentos con schema photos
let photo1 = new Photos({
    nombreUsuario: "ander23",
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.xatakafoto.com%2Ftrucos-y-consejos%2Fcomo-donde-enfocar-correctamente-fotografia-paisaje&psig=AOvVaw3J0hFj9EcKx9AxAI1_CqBW&ust=1637109696296000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNCdoYfTm_QCFQAAAAAdAAAAABAQ",
    titulo: "Atardecer",
    descripcion: "atardecer en Alemania"
});
let photo2 = new Photos({
    nombreUsuario: "leolera",
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.3djuegos.com%2Fforos%2Ftema%2F16571954%2F0%2F10-paisajes-hermosos-de-la-naturaleza%2F&psig=AOvVaw3J0hFj9EcKx9AxAI1_CqBW&ust=1637109696296000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNCdoYfTm_QCFQAAAAAdAAAAABAX",
    titulo: "Manantial",
    descripcion: "relax"
});
let photo3 = new Photos({
    nombreUsuario: "jess34",
    url: "https://hddesktopwallpapers.in/wp-content/uploads/2015/09/wave-pictures.jpg",
    titulo: "Ola Mexico",
    descripcion: "paisaje con buenas vistas"
});
let photo4 = new Photos({
    nombreUsuario: "rubia12",
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bharad.es%2Fmx%2Fpaisajes-de-china%2F&psig=AOvVaw3J0hFj9EcKx9AxAI1_CqBW&ust=1637109696296000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNCdoYfTm_QCFQAAAAAdAAAAABAv",
    titulo: "Paisaje China",
    descripcion: "Hermosa cultura"
});

// photo4.save(checkRespuesta)
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


// Insertamos todos los documentos de User y Photo
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
