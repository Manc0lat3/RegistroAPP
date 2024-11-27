import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-editar-reserva',
  templateUrl: './editar-reserva.page.html',
  styleUrls: ['./editar-reserva.page.scss'],
})
export class EditarReservaPage implements OnInit {
  username: string = '';
  reservaEditada: any = { nombre: '', fecha: '', hora: '' };

  constructor(private router: Router, private authService: AuthService) {
    this.username = this.authService.getUsername();
  }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.reservaEditada = navigation.extras.state['reserva'];
    }
  }

  goBack() {
    this.router.navigate(['/menu']);
  }

  guardarReserva() {
    const reservasGuardadas = JSON.parse(localStorage.getItem('reservas') || '[]');

    const index = reservasGuardadas.findIndex((reserva: any) => {
      return reserva.nombre === this.reservaEditada.nombre && reserva.usuario === this.username;
    });

    if (index !== -1) {
      reservasGuardadas[index].fecha = this.reservaEditada.fecha;
      reservasGuardadas[index].hora = this.reservaEditada.hora;

      localStorage.setItem('reservas', JSON.stringify(reservasGuardadas));

      alert('Reserva actualizada con éxito!');
      this.goBack();
    } else {
      alert('No se encontró la reserva para editar.');
    }
  }
}
