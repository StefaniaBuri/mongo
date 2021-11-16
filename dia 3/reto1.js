const mongoose = require("mongoose");

//Conecto con la BBDD de Mongo
mongoose.connect("mongodb://localhost:27017/codenotch", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

//Reto 1
//RELACION ONE TO ONE(1:1)

// CURSO SCHEMA
const CursoSchema = new mongoose.Schema({
    titulo: String,
   });

let CursoModel = mongoose.model("Curso1", CursoSchema);

// ALUMNO SCHEMA
const AlumnoSchema = new mongoose.Schema({
    nombre: String,
    apellidos: String,
    cursos:
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Curso1',
      }
    
});

let AlumnoModel = mongoose.model("Alumno1", AlumnoSchema);


//Creo documentos en base a los modelos de estudiante y curso

let curso = new CursoModel({titulo:"Juego de Tronos"})
curso.save()
    .then( (course) => {
        console.log("Curso guardado correctamente");
        console.log(course);
        let alumno = new AlumnoModel({nombre: "Andre", apellidos: "Custodio Urteaga", cursos: course._id})
        return alumno.save();
    })
    .then( (student) =>{
        console.log("Alumno guardado correctamente");
        console.log(student);
    })
    .catch( (error) => {
        console.log(error);
    })


//Buscamos el alumno y curso asociado

AlumnoModel.findOne({nombre: 'Andre'})
    .populate('cursos')
    .then( (alumno) => {
        console.log(`El alumno ${alumno.nombre} tiene ${alumno.cursos.titulo}`);
        console.log(alumno);
    })
    .catch( (err) =>{
        console.log(err);
        process.exit(-1);
    })




//RELACION ONE TO MANY(1:N)
// CURSO SCHEMA
const CursoSchema = new mongoose.Schema({
    titulo: String,
   });

let CursoModel = mongoose.model("Curso", CursoSchema);

// ALUMNO SCHEMA
const AlumnoSchema = new mongoose.Schema({
    nombre: String,
    apellidos: String,
    cursos:
      [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Curso',
      }]
    
});

let AlumnoModel = mongoose.model("Alumno1", AlumnoSchema);

//Creamos los cursos para luego asociarlos
let referencias = [];
let curso1 = new CursoModel({titulo: "Javascript"})

curso1.save()
    .then( (course) =>{
        console.log("Curso1 guardado correctamente");
        referencias.push(course._id)
        curso1 = new CursoModel({titulo: "Typescript"})
        return curso1.save();
    })
    .then( (course) =>{
        console.log("Curso2 guardado correctamente");
        referencias.push(course._id)
        curso1 = new CursoModel({ titulo: "Python"})
        return curso1.save();
    })
    .then( (course) => {
        console.log("Curso3 guardado correctamente");
        referencias.push(course._id)
        curso1 = new CursoModel({ titulo: "PHP"})
        return curso1.save();
    })
    .then( (course) => {
        console.log("Curso4 guardado correctamente");
        referencias.push(course._id)
        let alumno = new AlumnoModel({ nombre: "Stefania", apellidos: "Buri Mejia", cursos: referencias})
        return alumno.save()
    })
    .then( (student) =>{
        console.log("Alumno guardado correctamente");
    })
    .catch( (error) =>{
        console.log(error);
    })


//Buscamos el alumno con los cursos asociados
AlumnoModel.findOne( {nombre: 'Stefania'})
    .populate('cursos')
    .then( (alumno) =>{
        console.log(`El alumno ${alumno.nombre} tiene ${alumno.cursos.length}cursos asociados.`);
        console.log("Datos del primer curso" + alumno.cursos[0].titulo);
        console.log(alumno);
        mongoose.disconnect();
    })
    .catch( (err) =>{
        console.log(err);
        process.exit(-1);
    })




//RELACION MANY TO MANY(N:M)
// CURSO SCHEMA
const CursoSchema = new mongoose.Schema({
    titulo: String,
    alumnos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "AlumnoVarios"
    }]
});

let CursoModel = mongoose.model("CursoVarios", CursoSchema);

// ALUMNO SCHEMA
const AlumnoSchema = new mongoose.Schema({
    nombre: String,
    apellidos: String,
    cursos:
      [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CursoVarios',
      }]
    
});

let AlumnoModel = mongoose.model("AlumnoVarios", AlumnoSchema);

//Creamos los cursos para luego asociarlos
let curso1 = new CursoModel({titulo: "Javascript", alumnos: []})

curso1.save()
    .then( (course) =>{
        console.log("Curso guardado correctamente");
    })
    .catch( (error) =>{
        console.log(error);
    })

curso1 = new CursoModel({titulo: "HTML", alumnos: []})
curso1.save()
    .then( (course) => {
        console.log("Curso guardado correctamente");
    })
    .catch( (error) =>{
        console.log(error);
    })


curso1 = new CursoModel({titulo: "CSS", alumnos: []})
curso1.save()
    .then( (course) => {
        console.log("Curso guardado correctamente");
    })
    .catch( (error) =>{
        console.log(error);
    })


curso1 = new CursoModel({titulo: "Angular", alumnos: []})
curso1.save()
    .then( (course) => {
        console.log("Curso guardado correctamente");
    })
    .catch( (error) =>{
        console.log(error);
    })



//Creamos los alumnos
let alumno = new AlumnoModel({nombre: "Fabian", apellidos: "Menendez Pinzon", cursos: ["6193fa966582b93190bf0941", "6193fa966582b93190bf0942"]})
alumno.save()
    .then( (student) =>{
        console.log("Alumno guardado correctamente");
    })
    .catch( (error) =>{
        console.log(error);
    })

alumno = new AlumnoModel({nombre: "Enrique", apellidos: "Hurtado Espinoza", cursos: ["6193fa966582b93190bf0941", "6193fa966582b93190bf0943"]})
alumno.save()
    .then( (student) =>{
        console.log("Alumno guardado correctamente");
    })
    .catch( (error) =>{
        console.log(error);
    })


alumno = new AlumnoModel({nombre: "Mia", apellidos: "Caceres Linares", cursos: ["6193fa966582b93190bf0944", "6193fa966582b93190bf0943"]})
alumno.save()
    .then( (student) =>{
        console.log("Alumno guardado correctamente");
    })
    .catch( (error) =>{
        console.log(error);
    })

alumno = new AlumnoModel({nombre: "Lucia", apellidos: "Garrido Perez", cursos: ["6193fa966582b93190bf0944", "6193fa966582b93190bf0942"]})
alumno.save()
    .then( (student) =>{
        console.log("Alumno guardado correctamente");
    })
    .catch( (error) =>{
        console.log(error);
    })


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


// RELACIONAMOS LOS CURSOS CON LOS ALUMNOS

CursoModel.updateOne({titulo: "Javascript"}, {alumnos: ["6193fdf670a7689cfd286b60", "6193fdf670a7689cfd286b61"]}, checkRespuesta)
CursoModel.updateOne({titulo: "HTML"}, {alumnos: ["6193fdf670a7689cfd286b62", "6193fdf670a7689cfd286b63"]}, checkRespuesta)
CursoModel.updateOne({titulo: "CSS"}, {alumnos: ["6193fdf670a7689cfd286b60", "6193fdf670a7689cfd286b63"]}, checkRespuesta)
CursoModel.updateOne({titulo: "Angular"}, {alumnos: ["6193fdf670a7689cfd286b61", "6193fdf670a7689cfd286b63"]}, checkRespuesta)



//Busquedas

AlumnoModel.findOne({nombre: "Fabian"})
    .populate('cursos')
    .exec(function (err, alumno){
        if(err)
        console.log(err);

        console.log(`El alumno ${alumno.nombre} tiene ${alumno.cursos.length} cursos`);
        console.log(alumno);

        mongoose.disconnect();
    })


CursoModel.findOne({titulo: "CSS"})
    .populate('alumnos')
    .exec(function (err, curso1){
        if(err)
        console.log(err);

        console.log(`El curso ${curso1.titulo} tiene ${curso1.alumnos.length} alumnos`);
        console.log(curso1);

        mongoose.disconnect();
    })


