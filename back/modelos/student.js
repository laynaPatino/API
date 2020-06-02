const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    nombres: String,
    apellidos: String,
    edad: Number,
    correo:String,
    direccion:String,
    telefono:Number
});

module.exports = mongoose.model("Student", StudentSchema);