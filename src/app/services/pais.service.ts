import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  traerPaises(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.api);
  }
}
