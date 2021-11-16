//Reto 3
const mongoose = require("mongoose");
const User = require("./schemas/UserSchema");
const Photos = require("./schemas/PhotosSchema");

//Conecto con la BBDD de Mongo
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
    role: "profesora",
    address: "Calle silfide nº10",
    phone: 633566988,
    email: "mariatheboss@mariaboss.com",
    follow: "MariGo_04"
});


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
    nombreUsuario: "ander23",
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




//Función subida de fotos (dado usuario,url foto,titulo y descrip guardarlo en photos)
function subidaFotos(nombreUsuario, url, titulo, descripcion) {
    let nuevo = new Photos({
        nombreUsuario: nombreUsuario, 
        url: url,
        titulo: titulo, 
        descripcion: descripcion});

    Photos.create(nuevo)
        .then(function(data) {
            console.log("Documento creado en la colección Photos");
            console.log(data);
            mongoose.disconnect();
        })
        .catch(function(err)
        {
            console.log(err);
            mongoose.disconnect();
        })
        User.create(user1)
}

subidaFotos("ander23", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.xatakafoto.com%2Ftrucos-y-consejos%2Fcomo-donde-enfocar-correctamente-fotografia-paisaje&psig=AOvVaw3J0hFj9EcKx9AxAI1_CqBW&ust=1637109696296000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNCdoYfTm_QCFQAAAAAdAAAAABAQ", "Atardecer", "fin de semana vacaciones Alemania");



//Función obtener todas fotos usuario
function obtenerUsuario(usuario) {
    Photos.find({nombreUsuario: usuario}, {nombreUsuario: 0}).exec()
        .then(function(data) {
            console.log("Fotos subidas por el usuario: " + usuario);
            console.log(data);
            mongoose.disconnect();
        })
        .catch(function(err)
        {
            console.log(err);
            mongoose.disconnect();
        })
}

obtenerUsuario("ander23");



//Función Seguir
function follow(usuario1, usuario2) {
    User.updateOne({login: usuario1}, {follow: usuario2}, checkRespuesta);
}

//follow("jess34", "ander23");


//Función dejar de seguir
function stopFollow(usuario1,usuario2) {
    User.exists({login: usuario1, follow: usuario2})
        .then (function(data) {
            console.log(data);
            if(data) {
                User.updateOne({login: usuario1}, {follow: null}, checkRespuesta);
            }
            else {
                console.log("El usuario: "+usuario1 + " no sigue a: "
                + usuario2);
                mongoose.disconnect();
            }
        })
        .catch(function(err) {
            console.log(err);
            mongoose.disconnect();
        })
}

stopFollow("jess34", "ander23");




//Función eliminar foto, dado un usuario y titulo eliminar foto
function deletePhoto(usuario1, title1) {
    Photos.deleteOne({nombreUsuario: usuario1, titulo: title1})
        .then(function(data) {
            console.log("Foto eliminada correctamente");
            console.log(data);
            mongoose.disconnect();
        })
        .catch(function(err) {
            console.log(err);
            mongoose.disconnect();
        })
}

deletePhoto("ander23", "Atardecer");


//Función eliminar todas las fotos
function deleteAllPhotos(usuario) {
    Photos.deleteMany({nombreUsuario: usuario})
        .then(function(data) {
            console.log("Fotos eliminadas correctamente");
            console.log(data);
            mongoose.disconnect();
        })
        .catch(function(err) {
            console.log(err);
            mongoose.disconnect();
        })
}

deleteAllPhotos("ander23");

