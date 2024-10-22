import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email!: string;
  password!: string;
  username: string = '';

  constructor(
    private navCtrl: NavController,  // Cambiado para usar NavController
    private router: Router,
    private authService: AuthService
  ) {}

  // Método para regresar a la página anterior
  goBack() {
    this.navCtrl.back();  // Regresa a la página anterior en la pila de navegación
  }

  async login() {
    const emailIngresado = this.email.trim().toLowerCase();
    const passwordIngresado = this.password.trim();

    // Validar que los campos no estén vacíos
    if (!emailIngresado || !passwordIngresado) {
      console.log('Por favor, completa todos los campos');
      return;
    }

    try {
      // Llamada al servicio de autenticación
      const usuarioAutenticado = await this.authService.login(emailIngresado, passwordIngresado);

      if (usuarioAutenticado) {
        this.username = usuarioAutenticado.nombre;  // Asignar el nombre del usuario autenticado
        console.log('Inicio de sesión exitoso -', usuarioAutenticado.rol);
        
        // Navegación según el rol del usuario
        if (usuarioAutenticado.rol === 'admin') {
          this.router.navigate(['/admin']);
        } else if (usuarioAutenticado.rol === 'alumno') {
          this.router.navigate(['/menu']);
        }
      } else {
        console.log('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error al iniciar sesión', error);
    }
  }
}