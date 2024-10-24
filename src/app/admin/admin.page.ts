import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  username: string = 'Usuario'; 

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout(); 
    this.username = 'Usuario';  
    this.router.navigate(['/login']); 
  }

  ionViewWillEnter() {

    const currentUsername = this.authService.getUsername();
    this.username = currentUsername ? currentUsername : 'Usuario';
  }

  goBack() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    const currentUsername = this.authService.getUsername();
    this.username = currentUsername ? currentUsername : 'Usuario';
  }
}
