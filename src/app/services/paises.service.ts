import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../classes/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private url = 'https://restcountries.com/v3.1/';

  constructor(
    private http: HttpClient,
  ) { }

  traerPaises(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this._getUrl('all'));
  }

  traerPaisPorCodigo(code: string): Observable<Pais> {
    return this.http.get<Pais>(this._getUrl(`alpha/${code}`));
  }

  private _getUrl(path: string) {
    return `${this.url}/${path}`;
  }
}
