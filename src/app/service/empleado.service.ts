import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpleadoModel } from '../model/EmpleadoModel';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private httpClient: HttpClient) { 

  }

  getEmpleado(): Observable<EmpleadoModel[]>{
    return this.httpClient.get<EmpleadoModel[]>('http://localhost:9000/api/Empleado/Obtener').pipe(map(res => res));
  }
  saveEmpleado(request:any): Observable<any>{
    return this.httpClient.post<EmpleadoModel[]>('http://localhost:9000/api/Empleado/Guardar',request).pipe(map(res => res));
  }
  updateEmpleado(request:any): Observable<any>{
    return this.httpClient.post<EmpleadoModel[]>('http://localhost:9000/api/Empleado/Actualizar',request).pipe(map(res => res));
  }
  deleteEmpleado(request:any): Observable<any>{
    return this.httpClient.post<EmpleadoModel[]>('http://localhost:9000/api/Empleado/Eliminar',request).pipe(map(res => res));
  }
}
