import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../class/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private api = 'https://restcountries.com/v3.1/all';

  constructor(
    private http: HttpClient,
  ) { }


  /**
   * Metodo hace peticion a restcountries y devuelve paises.
   * @returns any[]
   */
  traerPaises(): Observable<Pais[]> {

    return this.http.get<Pais[]>(this.api);
  }
}
