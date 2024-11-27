import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  username: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
}
goBack() {
  this.router.navigate(['/login']);
}
ngOnInit() {
  this.username = this.authService.getUsername();
}
}