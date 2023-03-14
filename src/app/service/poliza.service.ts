import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PolizaModel } from '../model/Polizamodel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PolizaService {

  constructor(private httpClient: HttpClient) { 

  }
  getPoliza(): Observable<PolizaModel[]>{
    return this.httpClient.get<PolizaModel[]>('http://localhost:9000/api/Polizas/Obtener').pipe(map(res => res));
  }
  savePoliza(request:any): Observable<any>{
    return this.httpClient.post<PolizaModel[]>('http://localhost:9000/api/Polizas/Guardar',request).pipe(map(res => res));
  }
  updatePoliza(request:any): Observable<any>{
    return this.httpClient.post<PolizaModel[]>('http://localhost:9000/api/Polizas/Actualizar',request).pipe(map(res => res));
  }
  deletePoliza(request:any): Observable<any>{
    return this.httpClient.post<PolizaModel[]>('http://localhost:9000/api/Polizas/Eliminar',request).pipe(map(res => res));
  }
}
