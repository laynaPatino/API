import { Injectable } from '@angular/core';

import{HttpClient, HttpHeaders} from "@angular/common/http";

import{map} from "rxjs/operators";

import{Observable} from "rxjs";



@Injectable()
export class EduBITService {
  url = "http://localhost:3000/api/"
  constructor(private _http: HttpClient) { }

  //servicio crear estudiante

  createStudent(nuevoEstudiante){
    let params = JSON.stringify(nuevoEstudiante);
    let options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this._http.post(this.url, params, options).pipe(map(res=> res));
  }

  //servicio leer estudiante
  getStudent(){
    return this._http.get(this.url).pipe(map((res)=>res));
  }

  //servicio actualizar estudiante
  editStudent(studentId, estudianteActualizado){
    let params = JSON.stringify(estudianteActualizado);
    let options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
    };
    return this._http
    .put(this.url + studentId, params, options)
    .pipe(map((res)=> res));
  }

  //servicio eliminar estudiante
  deleteStudent(studentId){
    let options = {
      headers: new HttpHeaders({"Content-Type":"application/json"})
    };
    return this._http.delete(this.url + studentId,options).pipe(map((res)=>res))
  }
}

