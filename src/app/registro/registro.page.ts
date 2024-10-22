import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  constructor(private router: Router) {}

  // Método para manejar el envío del formulario
  onSubmit(form: NgForm) {
    if (form.valid) {
      // Aquí puedes manejar el registro del usuario, como enviar datos a tu API.
      console.log('Registro exitoso:', form.value);
      // Después de registrar, puedes redirigir al usuario a la página de inicio de sesión o al menú.
      this.router.navigate(['/login']);
    }
  }
  goBack() {
    this.router.navigate(['/login']); // Redirige a la página de inicio de sesión
  }
}
