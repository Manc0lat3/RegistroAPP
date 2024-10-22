import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service'; 
@Component({
  selector: 'app-editar-reserva',
  templateUrl: './editar-reserva.page.html',
  styleUrls: ['./editar-reserva.page.scss'],
})
export class EditarReservaPage { username: string = '';

  constructor(private router: Router, private authService: AuthService) {
    this.username = this.authService.getUsername();
  }
  goBack() {
    this.router.navigate(['/menu']);
  }
}
