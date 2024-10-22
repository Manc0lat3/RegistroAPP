import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  username: string = 'Usuario';  // Valor inicial como 'Usuario'

  constructor(private authService: AuthService, private router: Router) {}

  // Método para cerrar sesión
  logout() {
    this.authService.logout();  // Llama al servicio de autenticación para cerrar sesión
    this.username = 'Usuario';  // Restablece el nombre de usuario a "Usuario"
    this.router.navigate(['/login']);  // Redirige a la página de login
  }

  // Método que se ejecuta cuando la vista está a punto de cargarse
  ionViewWillEnter() {
    // Actualiza el nombre de usuario cuando la vista entra
    const currentUsername = this.authService.getUsername();
    this.username = currentUsername ? currentUsername : 'Usuario';
  }

  // Método para regresar a la página de login
  goBack() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    // Inicializa el nombre de usuario al cargar la página
    const currentUsername = this.authService.getUsername();
    this.username = currentUsername ? currentUsername : 'Usuario';
  }
}
