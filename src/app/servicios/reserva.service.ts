import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservaService {
  private apiUrl = 'http://localhost:3000/api/reservas';

  constructor(private http: HttpClient) {}

  obtenerReservas(idusuario: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${idusuario}`);
  }

  crearReserva(reserva: any): Observable<any> {
    return this.http.post(this.apiUrl, reserva);
  }
}