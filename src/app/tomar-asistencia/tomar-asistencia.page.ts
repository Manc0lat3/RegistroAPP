import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-tomar-asistencia',
  templateUrl: './tomar-asistencia.page.html',
  styleUrls: ['./tomar-asistencia.page.scss'],
})
export class TomarAsistenciaPage implements OnInit {
  username: string = '';

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private authService: AuthService
  ) { }
  goBack() {
    this.navCtrl.back();  
  }
  logout() {
    this.authService.logout();  // Llama al servicio de autenticación para cerrar sesión
    this.username = 'Usuario';  // Restablece el nombre de usuario a "Usuario"
    this.router.navigate(['/login']);  // Redirige a la página de login
  }

  ngOnInit() {
  }

}
