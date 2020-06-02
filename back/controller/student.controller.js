//funciones de CRUD

const Student = require("../modelos/student"); //trae el  modelo



//crear estudiante

function createStudent(req,res){
    var students = new Student();
    var parametros = req.body;

    students.nombres = parametros.nombres;
    students.apellidos = parametros.apellidos;
    students.edad = parametros.edad;
    students.correo = parametros.correo;
    students.direccion = parametros.direccion;
    students.telefono = parametros.telefono;

    students.save((err, nuevoEstudiante)=>{
        if(err){
            res.status(500).send({message:"Error del servidor"})
        }else{
            if(!nuevoEstudiante){
                res.status(200).send({message:"no fue posible realizar el registro del estudiante"});
            } else{
                res.status(200).send({
                    status:"Estudiante creado",
                    students: nuevoEstudiante
                });
            }
        }
    })
}

// leer estudiante

function getStudent(req,res){
    Student.find((err,studentEncontrados)=>{
        if(err){
            res.status(500).send({mensaage:"Error del servidor"})
        }else{
            if(!studentEncontrados){
                res.status(200).send({message:"no fue posible encontrar estudiante"});
            } else{
                res.status(200).send({
                    status:"Estudiante encontrado",
                    students: studentEncontrados
                })
            }
        }
    })
}

//actualizar estudiante

function editStudent(req,res){
    var studentId = req.params.id;
    var nuevosDatosEstudiante = req.body;

    Student.findByIdAndUpdate(studentId, nuevosDatosEstudiante,(err, estudianteActualizado)=>{
        if(err){
            res.status(500).send({mensaage:"Error del servidor"})
        }else{
            if(!estudianteActualizado){
                res.status(200).send({message:"no fue posible actualizar la tarea"});
            } else{
                res.status(200).send({
                    status:"Estudiante actualizado correctamente",
                    students: nuevosDatosEstudiante
                });
            }
        }
    })
}

// eliminar tarea

function deleteStudent(req,res){
    var studentId = req.params.id;

    Student.findByIdAndDelete(studentId, (err,estudianteEliminar)=>{
        if(err){
            res.status(500).sen({mensaage:"Error del servidor"})
        }else{
            if(!estudianteEliminar){
                res.status(404).send({message:"no fue posible eliminar la tarea"});
            } else{
                res.status(200).send({
                    status:"Estudiante eliminado",
                    students: estudianteEliminar
                });
            }
        }
    })
}


//exportar funciones

module.exports = {
    createStudent,
    getStudent,
    editStudent,
    deleteStudent,
};