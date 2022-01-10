import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../classes/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(
    private http: HttpClient
  ) { }

  traePaises(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this._getUrl('all'));
    // .subscribe(data => {
    //   console.log(data);
    // }, error => {
    //   console.log(error);
    // })
  }

  traerContinente(continente: string) {

  }

  private _getUrl(path: string) {
    return `https://restcountries.com/v3.1/${path}`;
  }
}
