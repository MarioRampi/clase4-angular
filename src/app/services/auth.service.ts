import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

const URL_LOGIN = 'http://localhost:8080/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  login(email: string, password: string) {
    return this.http.post(URL_LOGIN, { email, password })
      .pipe(map((data: any) => {

        if (data?.token) {
          localStorage.setItem('token', data.token);
          return true;
        }

        return false;
      }
      ));
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLogged() {
    return this.getToken() !== null;
  }

  isAdmin() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
  }
}
