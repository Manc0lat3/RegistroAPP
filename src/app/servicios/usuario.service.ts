import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = "#"; // Cambia esto a la URL de tu API

  constructor(private http: HttpClient) {}

  crearUsuario(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, datos).pipe(
      catchError(this.manejarError)
    );
  }

  obtenerUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(this.manejarError)
    );
  }

  modificarUsuario(id: number, datos: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, datos).pipe(
      catchError(this.manejarError)
    );
  }

  eliminarUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(this.manejarError)
    );
  }

  private manejarError(error: any) {
    // Manejo de errores
    return throwError(error);
  }
}
