import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-recuperar',
    templateUrl: './recuperar.page.html',
    styleUrls: ['./recuperar.page.scss'],
    standalone: false
})
export class RecuperarPage {

  constructor(private router: Router) {}


  goHome() {
    this.router.navigate(['/home']);
  }

}
