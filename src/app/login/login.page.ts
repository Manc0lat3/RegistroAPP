import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { eye, eyeOff, lockClosed } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  passwordFieldType: string = 'password'; // Inicializamos el tipo de campo de contraseña
  username: string = ''; // Inicializamos username
  password: string = ''; // Inicializamos password

  constructor() { 
    addIcons({ eye, eyeOff, lockClosed });
  }

  ngOnInit() { }

  // Método para alternar la visibilidad de la contraseña
  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}
