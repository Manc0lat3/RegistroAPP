import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private apiUrl = "#"; 

  constructor(private http: HttpClient) {}

  crearReserva(datos: any): Observable<any> {
    if (!this.validarDatosReserva(datos)) {
      return throwError('Datos de reserva inválidos');
    }
    return this.http.post(`${this.apiUrl}`, datos).pipe(
      catchError(this.manejarError)
    );
  }

  modificarReserva(id: number, datos: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, datos).pipe(
      catchError(this.manejarError)
    );
  }

  eliminarReserva(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(this.manejarError)
    );
  }

  obtenerReservas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(this.manejarError)
    );
  }

  private validarDatosReserva(datos: any): boolean {
    return true; 
  }

  private manejarError(error: any) {
    return throwError(error);
  }
}
