import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

const TOKEN_NAME = 'token';
const API_URL_LOGIN = 'http://localhost:8080/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  login(email: string, password: string) {
    return this.http.post(API_URL_LOGIN, { email, password })
      .pipe(map((data: any) => {
        // console.log('data', data);
        localStorage.setItem(TOKEN_NAME, data.token);

        return true;
      }));
  }

  getToken() {
    return localStorage.getItem(TOKEN_NAME);
  }
  logout() {
    localStorage.removeItem(TOKEN_NAME);
  }

  isLogged() {
    return localStorage.getItem(TOKEN_NAME) !== null;
  }

  isAdmin() {
    // return true;
    const token = localStorage.getItem(TOKEN_NAME);
    if (token) {
      const payload = this.getTokenPayload(token);
      console.log(payload);
      // return payload.role === 'ADMIN';
      return payload.admin;
    }
    return false;
  }

  getTokenPayload(token: string) {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  }

  getPayload() {
    const token = localStorage.getItem(TOKEN_NAME);
    if (token) {
      return this.getTokenPayload(token);
    }
    return null;
  }

  listar() {
    return this.http.get('http://localhost:8080/listar');
  }
}
