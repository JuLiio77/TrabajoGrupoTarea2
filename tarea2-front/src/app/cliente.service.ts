import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl:string = 'http://localhost:8080/api/clientes'
  private httpHeaders: HttpHeaders = new HttpHeaders({'Content-type' : 'application/json'})

  constructor(private http: HttpClient) { }

  obtenerClientes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + "/list");
  }

  agregarCliente(nuevoCliente: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, nuevoCliente, {headers: this.httpHeaders});
  }
}
