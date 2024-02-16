import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:8080/api/clientes'

  constructor(private http: HttpClient) { }

  obtenerClientes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  agregarCliente(nuevoCliente: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, nuevoCliente);
  }
}
