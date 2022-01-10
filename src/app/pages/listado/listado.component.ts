import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from 'src/app/classes/pais';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  listaPaises: any[] = [];
  loading = true;

  constructor(
    // private http: HttpClient,
    private paises: PaisesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.traerPaises();
  }

  traerPaises() {
    this.listaPaises = [];
    this.loading = true;

    // this.http.get<any[]>('https://restcountries.com/v3.1/all')
    this.paises.traerPaises()
      .subscribe((data) => {
        console.log(data);
        this.loading = !true;
        this.listaPaises = data;
      }, e => {
        this.loading = !true;
        console.log(e);
      });
  }

  onClick() {
    this.traerPaises();
  }

  onPais(pais: Pais) {
    console.log(pais);
    this.router.navigate(['detalle', pais.cioc]);
  }

}
