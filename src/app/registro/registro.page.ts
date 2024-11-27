import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  private apiUrl = 'http://localhost:3000/api/registro';

  constructor(private router: Router, private http: HttpClient, private toastController: ToastController) {}

  async onSubmit(form: NgForm) {
    if (form.valid) {
      // Datos de usuario
      const usuario = {
        nombre: form.value.nombre,
        correo: form.value.correo,
        contraseña: form.value.contraseña
      };

      this.http.post(this.apiUrl, usuario).subscribe(
        async response => {
          console.log('Usuario registrado con éxito:', response);

          const toast = await this.toastController.create({
            message: 'Usuario registrado con éxito',
            duration: 3000,
            position: 'middle'
          });
          await toast.present();

          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 3000);
        },
        error => {
          console.error('Error al registrar usuario:', error);
        }
      );
    }
  }
  goBack() {
    this.router.navigate(['/login']);
  }
}
