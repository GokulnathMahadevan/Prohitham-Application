import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly tokenKey = 'auth_token';

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    // Mock logic: Replace with API call
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem(this.tokenKey, 'mock-token');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }
}
