import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const LOGIN_ENDPOINT = 'http://localhost:8080/login';

const LISTAR_ENDPOINT = 'http://localhost:8080/listar';

const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // estaLogueado: boolean = false;

  constructor(
    private http: HttpClient
  ) { }


  login(email: string, password: string): Observable<boolean> {
    return this.http.post(LOGIN_ENDPOINT, {
      email,
      password
    })
      .pipe(map((res: any) => {
        try {
          if (res?.token) {
            localStorage.setItem(TOKEN_KEY, res.token);
          }

          return true;
        } catch (error) {
          return false;
        }
      }));
  }

  logout() {
    localStorage.removeItem(TOKEN_KEY);
  }

  isLogged(): boolean {
    // TODO Chequear que exista el token en el localStorage y chequear claims.
    // return localStorage.getItem(TOKEN_KEY) !== null;
    const payload = this.getPayload();

    if (payload) {
      // TODO Chequear claims: exp, nbf, aud, iss, sub, etc.
      return true;
    }

    return false;
  }

  isAdmin(): boolean {
    const payload = this.getPayload();

    if (payload) {
      return payload.role === 'admin';
    }

    return false;
  }

  getPayload(): any {
    const token = localStorage.getItem(TOKEN_KEY);

    if (token) {
      return JSON.parse(atob(token.split('.')[1]));
    }

    return null;
  }

  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }

  listar() {
    return this.http.get(
      LISTAR_ENDPOINT,
      // {
      //   headers: {
      //     'Authorization': `${this.getToken()}`
      //   }
      // }
    );
  }
}
