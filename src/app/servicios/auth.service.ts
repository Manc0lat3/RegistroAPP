import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface UserResponse {
  id: number;
  nombre: string;
  correo: string;
  rol: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/login';

  private isLoggedIn = false;
  private currentUser: { id: number; nombre: string; rol: string } | null = null;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<UserResponse> {
    return this.http.post<UserResponse>(this.apiUrl, { email, password });
  }

  setCurrentUser(user: { id: number; nombre: string; rol: string }) {
    this.isLoggedIn = true;
    this.currentUser = user;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }


  logout() {
    this.isLoggedIn = false;
    this.currentUser = null;
  }
  getCurrentUser(): { id: number; nombre: string; rol: string } | null {
    return this.currentUser;
}
  getUsername(): string {
    return this.currentUser ? this.currentUser.nombre : '';
  }
}
