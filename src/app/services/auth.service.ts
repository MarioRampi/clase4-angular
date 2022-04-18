import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const URL_LOGIN = 'http://localhost:8080/login';
const URL_LISTA = 'http://localhost:8080/listar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(email: string, password: string): Observable<boolean> {
    return this.httpClient.post(URL_LOGIN, {
      email,
      password
    }).pipe(map((data: any) => {
      localStorage.setItem('token', data.token);
      return true;
    }))
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }

  traerLista() {
    return this.httpClient.get(URL_LISTA)
      .subscribe({
        next: (data: any) => {
          console.log(data);
        },
        error: (err: any) => {
          console.log(err);
        }
      })
  }
}
