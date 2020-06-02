const express = require("express");
const sc = require("../controller/student.controller")

var router = express.Router();


//ruta.agregar.estudiante
router.post("/", sc.createStudent);

//ruta.consultar.estudiante
router.get("/", sc.getStudent);

//ruta.actualizar.estudiante
router.put("/:id", sc.editStudent);

//ruta.eliminar.estudiante
router.delete("/:id", sc.deleteStudent);

module.exports=router;