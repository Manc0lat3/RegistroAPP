import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { UsuarioService } from '../servicios/usuario.service'; 
import * as moment from 'moment-timezone';

const fechaUtc = "2024-11-21T03:00:00.000Z";
const fechaChilena = moment.tz(fechaUtc, 'America/Santiago').format('YYYY-MM-DD HH:mm:ss');
console.log(fechaChilena);
interface UserResponse {
  id: number;
  nombre: string;
  correo: string;
  rol: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email!: string;
  password!: string;
  username: string = '';
  errorMessage: string = '';
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 3000,
    },
  };

  constructor(private navCtrl: NavController, private router: Router, private authService: AuthService,private usuarioService: UsuarioService) {}

  goBack() {
    this.router.navigate(['/login']);
  }

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (response: UserResponse) => {
        const user = {
          id: response.id,
          nombre: response.nombre,
          rol: response.rol,
        };
        this.authService.setCurrentUser(user);
        this.router.navigate(['/menu']);
      },
      (error) => {
        this.errorMessage = 'Credenciales inválidas. Intenta de nuevo.';
      }
    );
  }
}