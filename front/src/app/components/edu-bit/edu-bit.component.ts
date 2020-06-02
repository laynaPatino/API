import { Component, OnInit } from '@angular/core';

import { EduBIT } from "../../models/edu-bit";
import { EduBITService } from "../../services/edu-bit.service";



@Component({
  selector: 'app-edu-bit',
  templateUrl: './edu-bit.component.html',
  styleUrls: ['./edu-bit.component.css']
})

export class EduBITComponent implements OnInit {

  public studentRegistro: EduBIT;
  public studentEncontrados: any = [];

  constructor(private eduBITService: EduBITService) {
    this.studentRegistro = new EduBIT("", "", "", 0, "", "", 0)
  }

  ngOnInit(): void {
    this.mostrarStudent();
  }
  //consumo servicio crearEstudiante con metodo agregarEstudiante

  agregarEstudiante() {
    this.eduBITService.createStudent(this.studentRegistro).subscribe(
      (response: any) => {
        let students = response.students;
        this.studentRegistro = students;
        console.log(this.studentRegistro)
        if (!this.studentRegistro._id) {
          alert("Error al registrar tarea");
        } else {
          alert(`registro exitoso!!, ${this.studentRegistro.nombres} tiene una nueva tarea`);
          this.studentRegistro = new EduBIT("", "", "", 0, "", "", 0);
          this.mostrarStudent();
        }
      },
      (error) => {
        var errormensaje = <any>error;
        if (errormensaje != null) {
          console.log(error);
        }
      }
    );
  }
  //consumo servicio getStudent con metodo agregarEstudiante
  mostrarStudent() {
    this.eduBITService.getStudent().subscribe(
      (response: any) => {
        this.studentEncontrados = response.students
      },
      (error) => {
        var errormensaje = <any>error;
        if (errormensaje != null) {
          console.log(error);
        }
      }
    );
  }

  //Consumo el servicio editStudent con el metodo editarStudent

  editarStudent(student) {
    this.eduBITService.editStudent(student._id, student).subscribe(
      (response: any) => {
        if (response.students) {
          alert(response.status);
          this.mostrarStudent();
        } else {
          alert("no fue posible actualizar el estudiante");
        }
      },
      (error) => {
        if (error != null) {
          console.log(error)
        }
      }
    );
  }

  //Consumo de servicio de deleteStudent con el metodo eliminarStudent

  eliminarStudent(idStudent) {
    this.eduBITService.deleteStudent(idStudent).subscribe(
      (response: any) => {
        if (response.students) {
          alert(response.status);
          this.mostrarStudent();
        } else {
          alert("no fue posible eliminar el estudiante");
        }
      },
      (error) => {
        if (error != null) {
          console.log(error)
        }
      }
    );
  }
}
