import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginForm } from '../interfaces/login-form';

export const JWT_NAME = 'usr_token';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly http: HttpClient,
    private jwtHelper: JwtHelperService
  ) {}

  BASE_URL: string = 'http://127.0.0.1:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  login(loginForm: LoginForm) {
    return this.http
      .post<any>(`${this.BASE_URL}/user/login`, {
        email: loginForm.email,
        password: loginForm.password,
      })
      .pipe(
        map((token) => {
          console.log('token ' + token.access_token);
          sessionStorage.setItem(
            JWT_NAME,
            JSON.stringify(token.access_token).slice(1, -1)
          );
          return token;
        })
      );
  }

  logout() {
    sessionStorage.removeItem(JWT_NAME);
  }

  isAuthenticated(): boolean {
    const token = sessionStorage.getItem(JWT_NAME);
    return !this.jwtHelper.isTokenExpired(JSON.stringify(token));
  }
}
