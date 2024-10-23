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

  goBack() {
    this.navCtrl.back();  
  }

  async login() {
    const emailIngresado = this.email.trim().toLowerCase();
    const passwordIngresado = this.password.trim();

    if (!emailIngresado || !passwordIngresado) {
      console.log('Por favor, completa todos los campos');
      return;
    }

    try {
      const usuarioAutenticado = await this.authService.login(emailIngresado, passwordIngresado);

      if (usuarioAutenticado) {
        this.username = usuarioAutenticado.nombre; 
        console.log('Inicio de sesión exitoso -', usuarioAutenticado.rol);
        
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