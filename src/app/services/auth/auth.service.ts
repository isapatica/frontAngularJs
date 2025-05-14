import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth-token';
  constructor(private router: Router) { }

  login(username: String, password: String): boolean{
    if (username === 'admin' && password === '1234') {
      localStorage.setItem(this.TOKEN_KEY, 'Fake_token');

      return true;
    } else 
      return false;
    }
    itsLoggedIn(): boolean {
      return localStorage.getItem(this.TOKEN_KEY) != null;
    }
}
