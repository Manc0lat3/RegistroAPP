import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { eye, eyeOff, lockClosed } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Constantes de autenticación
  readonly VALID_USERNAME: string = '21261075-5';
  readonly VALID_PASSWORD: string = '123123';

  passwordFieldType: string = 'password'; // Inicializamos el tipo de campo de contraseña
  username: string = ''; // Inicializamos username
  password: string = ''; // Inicializamos password

  constructor(private router: Router) { 
    // Agregar iconos al inicio
    addIcons({ eye, eyeOff, lockClosed });
  }

  // Método para redirigir a la página de inicio
  goHome() {
    this.router.navigate(['/home']);
  }

  ngOnInit() { }

  // Método para alternar la visibilidad de la contraseña
  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  // Método para iniciar sesión
  login() {
    console.log('Intentando iniciar sesión...'); // Para debugging

    // Verificar si el formulario es válido
    if (this.username && this.password) {
      console.log(`Username ingresado: ${this.username}`);
      console.log(`Password ingresado: ${this.password}`);

      if (this.username === this.VALID_USERNAME && this.password === this.VALID_PASSWORD) {
        console.log('Inicio de sesión exitoso');
        this.router.navigate(['/home']); // Redirigir al home en caso de éxito
      } else {
        console.error('Error: Credenciales inválidas');
        // Aquí puedes mostrar un mensaje de error con un ion-toast o un ion-alert
        alert('Credenciales inválidas. Inténtalo de nuevo.');
      }
    } else {
      console.error('Error: Campos de usuario y contraseña requeridos');
      alert('Por favor, completa todos los campos.');
    }
  }
}
