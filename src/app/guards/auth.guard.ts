import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isAuthenticated = this.authService.isAuthenticated(); // Asegúrate de que este método exista

    if (!isAuthenticated) {
      this.router.navigate(['/login']); // Redirige si no está autenticado
      return false;
    }
    return true; // Permite el acceso
  }
}