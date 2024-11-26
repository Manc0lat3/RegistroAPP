import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { Location } from '@angular/common';
@Component({
    selector: 'app-menu',
    templateUrl: './menu.page.html',
    styleUrls: ['./menu.page.scss'],
    standalone: false
})
export class MenuPage {
  username: string = '';
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 3000,
    },
  };
  constructor(private authService: AuthService, private router: Router, private location: Location) { 
    const usuarioActual = this.authService.getCurrentUser();
    if (usuarioActual) {
      this.username = usuarioActual.nombre;
    } else {
      this.username = 'Estudiante';
    }
  }

  logout() {
    this.authService.logout();  
    this.username = 'Usuario';  
    this.router.navigate(['/login']); 
  }

  ionViewWillEnter() {
    const currentUsername = this.authService.getUsername();
    this.username = currentUsername ? currentUsername : 'Usuario';
  }

  goToHistorialAsistencia() {
    this.router.navigate(['/tomar-asistencia']);
  }
  
  goToModificarReserva() {
    this.router.navigate(['/editar-reserva']);
  }

  goToHistorialReserva() {
    this.router.navigate(['/ver-asistencia']);
  }

  goBack() {
    this.router.navigate(['/login']);
  }

  
}
