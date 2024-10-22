import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-hacer-reserva',
  templateUrl: './hacer-reserva.page.html',
  styleUrls: ['./hacer-reserva.page.scss'],
})
export class HacerReservaPage implements OnInit {
  username: string = '';
  
  salones = [
    { nombre: 'Salón 1', imagen: 'assets/imagenes/SalaNormal-1.jpg', fecha: '', hora: '' },
    { nombre: 'Salón 2', imagen: 'assets/imagenes/SalaNormal-1.jpg', fecha: '', hora: '' },
    { nombre: 'Salón 3', imagen: 'assets/imagenes/SalaNormal-1.jpg', fecha: '', hora: '' },
    { nombre: 'Salón 4', imagen: 'assets/imagenes/SalaNormal-2.jpg', fecha: '', hora: '' },
    { nombre: 'Salón 5', imagen: 'assets/imagenes/SalaNormal-2.jpg', fecha: '', hora: '' },
    { nombre: 'Salón 6', imagen: 'assets/imagenes/SalaNormal-2.jpg', fecha: '', hora: '' },
    { nombre: 'Salón 7', imagen: 'assets/imagenes/SalaPC-1.jpg', fecha: '', hora: '' },
    { nombre: 'Salón 8', imagen: 'assets/imagenes/SalaPC-1.jpg', fecha: '', hora: '' },
    { nombre: 'Salón 9', imagen: 'assets/imagenes/SalaPC-1.jpg', fecha: '', hora: '' },
    { nombre: 'Salón 10', imagen: 'assets/imagenes/SalaPC-2.jpg', fecha: '', hora: '' },
    { nombre: 'Salón 11', imagen: 'assets/imagenes/SalaPC-2.jpg', fecha: '', hora: '' },
    { nombre: 'Salón 12', imagen: 'assets/imagenes/SalaPC-2.jpg', fecha: '', hora: '' },
  ];

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.username = this.authService.getUsername();
  }

  goBack() {
    this.router.navigate(['/menu']);
  }

  reservar(salon: any) {
    console.log('Reservando:', salon);
  }
}
