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


  readonly VALID_USERNAME: string = '21261075-5';
  readonly VALID_PASSWORD: string = '123123';

  passwordFieldType: string = 'password'; 
  username: string = ''; 
  password: string = ''; 

  constructor(private router: Router) { 

    addIcons({ eye, eyeOff, lockClosed });
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  ngOnInit() { }

 
  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  login() {
    console.log('Intentando iniciar sesión...'); 

    if (this.username && this.password) {
      console.log(`Username ingresado: ${this.username}`);
      console.log(`Password ingresado: ${this.password}`);

      if (this.username === this.VALID_USERNAME && this.password === this.VALID_PASSWORD) {
        console.log('Inicio de sesión exitoso');
        this.router.navigate(['/home']); 
      } else {
        console.error('Error: Credenciales inválidas');
        alert('Credenciales inválidas. Inténtalo de nuevo.');
      }
    } else {
      console.error('Error: Campos de usuario y contraseña requeridos');
      alert('Por favor, completa todos los campos.');
    }
  }
}
