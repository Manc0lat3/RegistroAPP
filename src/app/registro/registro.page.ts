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

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Registro exitoso:', form.value);
      this.router.navigate(['/login']);
    }
  }
  goBack() {
    this.router.navigate(['/login']);
  }
}
