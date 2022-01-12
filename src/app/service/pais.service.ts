import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../classes/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private api = 'https://restcountries.com/v3.1/';

  constructor(
    private http: HttpClient,
  ) { }

  traerPaises(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this._getUrl('all'));
  }

  private _getUrl(path: string): string {
    return `${this.api}${path}`;
  }
}
