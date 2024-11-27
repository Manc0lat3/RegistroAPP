import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { ReservaService } from '../servicios/reserva.service';

@Component({
  selector: 'app-historial-reserva',
  templateUrl: './historial-reserva.page.html',
  styleUrls: ['./historial-reserva.page.scss'],
})
export class HistorialReservaPage implements OnInit {
  username: string = '';
  reservas: any[] = [];

  constructor(private router: Router, private authService: AuthService,  private reservaService: ReservaService) {
    this.username = this.authService.getUsername();
  }

  ngOnInit() {
      const usuario = this.authService.getCurrentUser();
      if (usuario) {
          this.reservaService.obtenerReservas(usuario.id).subscribe(
              (data) => {
                  this.reservas = data;
              },
              (error) => {
                  console.error(error);
                  alert('Error al cargar el historial de reservas.');
              }
          );
      }
  }

  cargarReservas() {
    const reservasGuardadas = JSON.parse(localStorage.getItem('reservas') || '[]');
    this.reservas = reservasGuardadas.filter((reserva: any) => reserva.usuario === this.username);
  }

  editarReserva(reserva: any) {
    this.router.navigate(['/editar-reserva'], { state: { reserva } });
  }

  goBack() {
    this.router.navigate(['/menu']);
  }
}
