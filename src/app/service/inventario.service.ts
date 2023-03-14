import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InventarioModel } from '../model/InventarioModel';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor(private httpClient: HttpClient) { 

  }

  getInventario(): Observable<InventarioModel[]>{
    return this.httpClient.get<InventarioModel[]>('http://localhost:9000/api/Inventario/Obtener').pipe(map(res => res));
  }
  saveInventario(request:any): Observable<any>{
    return this.httpClient.post<InventarioModel[]>('http://localhost:9000/api/Inventario/Guardar',request).pipe(map(res => res));
  }
  updateInventario(request:any): Observable<any>{
    return this.httpClient.post<InventarioModel[]>('http://localhost:9000/api/Inventario/Actualizar',request).pipe(map(res => res));
  }
  deleteInventario(request:any): Observable<any>{
    return this.httpClient.post<InventarioModel[]>('http://localhost:9000/api/Inventario/Eliminar',request).pipe(map(res => res));
  }
}
