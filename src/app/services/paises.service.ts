import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../class/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private API = 'https://restcountries.com/v3.1/';

  constructor(
    private http: HttpClient,
  ) { }

  traePaises(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this._getUrl('all'));
  }

  _getUrl(path: string) {
    return `${this.API}${path}`;
  }
}
