import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { ReservaService } from '../servicios/reserva.service';

@Component({
  selector: 'app-hacer-reserva',
  templateUrl: './hacer-reserva.page.html',
  styleUrls: ['./hacer-reserva.page.scss'],
})
export class HacerReservaPage implements OnInit {
  username: string = '';

  salones = [
    { nombre: 'Salón Normal 1', imagen: 'assets/imagenes/SalaNormal-1.jpg', fecha: '', hora: '' },
    { nombre: 'Salón Normal 2', imagen: 'assets/imagenes/SalaNormal-1.jpg', fecha: '', hora: '' },
    { nombre: 'Salón Normal 3', imagen: 'assets/imagenes/SalaNormal-1.jpg', fecha: '', hora: '' },
    { nombre: 'Salón Normal 4', imagen: 'assets/imagenes/SalaNormal-1.jpg', fecha: '', hora: '' },
    { nombre: 'Salón Normal 5', imagen: 'assets/imagenes/SalaNormal-1.jpg', fecha: '', hora: '' },
    { nombre: 'Salón Normal 6', imagen: 'assets/imagenes/SalaNormal-1.jpg', fecha: '', hora: '' },
    { nombre: 'Salón Taller 1', imagen: 'assets/imagenes/SalaPC-1.jpg', fecha: '', hora: '' },
    { nombre: 'Salón Taller 2', imagen: 'assets/imagenes/SalaPC-1.jpg', fecha: '', hora: '' },
    { nombre: 'Salón Musica', imagen: 'assets/imagenes/SalaMusica-1.jpg', fecha: '', hora: '' },
    { nombre: 'Salón Auditorio', imagen: 'assets/imagenes/SalaAuditorio-1.jpg', fecha: '', hora: '' },
  ];

  constructor(private router: Router, private authService: AuthService, private reservaService: ReservaService) {}

  ngOnInit() {
    this.username = this.authService.getUsername();
  }

  goBack() {
    this.router.navigate(['/menu']);
  }

  reservar(salon: any) {
    if (!salon.fecha || !salon.hora) {
        alert('Por favor, completa la fecha y la hora.');
        return;
    }

    const nuevaReserva = {
        idusuario: this.authService.getCurrentUser()?.id,
        sala: salon.nombre,
        fecha: salon.fecha,
        horaini: salon.hora,
        horafin: salon.hora, // Asumiendo que hora de inicio y fin son iguales por ahora
    };

    this.reservaService.crearReserva(nuevaReserva).subscribe(
        (response) => {
            alert('Reserva realizada con éxito!');
            this.router.navigate(['/historial-reserva']);
        },
        (error) => {
            console.error(error);
            alert('Error al realizar la reserva.');
        }
    );
}
}