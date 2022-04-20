import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

const URL_LOGIN = 'http://localhost:8080/login';
const URL_LISTAR = 'http://localhost:8080/listar';

const TOKEN_NAME = 'token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }


  login(email: string, password: string) {
    return this.http.post(URL_LOGIN, {
      email,
      password,
    }).pipe(map((resp: any) => {

      localStorage.setItem(TOKEN_NAME, resp.token);

      return true;
    }));
  }

  logout() {
    localStorage.removeItem(TOKEN_NAME);
  }

  isLogged() {
    // Obtenewr payload, chequear claims.
    return localStorage.getItem(TOKEN_NAME) !== null;
  }

  isAdmin() {
    const payload = this.getPayload();
    console.log(payload);

    if (!payload) {
      return false;
    }

    if (payload?.role === 'admin') {
      return true;
    }

    return false;
  }

  getPayload() {
    const token = localStorage.getItem(TOKEN_NAME);

    if (!token) {
      return null;
    }

    return JSON.parse(atob(token?.split('.')[1]));

  }
  getToken() {
    return localStorage.getItem(TOKEN_NAME);
  }

  listar() {
    return this.http.get(
      URL_LISTAR,
    );
  }
}
