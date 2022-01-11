import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from 'src/app/class/pais';
import { PaisService } from 'src/app/service/pais.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  paises: Pais[] = [];
  loading = true;
  error = false;

  constructor(
    // private http: HttpClient,
    private paisService: PaisService,
    private router: Router,
  ) { }
  // https://restcountries.com/v3.1/all
  ngOnInit(): void {
    this.traerPaises();
  }

  traerPaises() {
    this.paises = [];
    this.loading = true;
    this.error = false;

    this.paisService.traerPaises()
      // this.http.get<any[]>('https://restcountries.com/v3.1/all')
      .subscribe(data => {
        console.log(data);
        this.loading = false;
        this.paises = data;
      }, e => {
        console.log(e);
        this.loading = false;
        this.error = true;
      });
  }

  verDetalle(pais: Pais) {
    console.log(pais);
    this.router.navigate(['detalle', pais.fifa]);
  }

}
