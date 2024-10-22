import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial-reserva',
  templateUrl: './historial-reserva.page.html',
  styleUrls: ['./historial-reserva.page.scss'],
})
export class HistorialReservaPage implements OnInit {
  username: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.username = this.authService.getUsername();
  }

  goBack() {
    this.router.navigate(['/menu']);
  }
}
