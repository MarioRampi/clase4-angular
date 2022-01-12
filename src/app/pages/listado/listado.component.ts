import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from 'src/app/class/pais';
import { PaisService } from 'src/app/services/pais.service';
// import { HttpClient } from '@angular/common/http';

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

  ngOnInit(): void {
    this.traerPaises();
  }

  traerPaises() {
    this.paises = [];
    this.loading = true;
    this.error = false;
    // this.http.get<any[]>('https://restcountries.com/v3.1/all')
    this.paisService.traerPaises()
      .subscribe(data => {
        console.log(data);
        // data.forEach(item => item.name.common);

        this.loading = false;
        this.paises = data;
      }, e => {
        this.loading = false;
        console.log(e);
        this.error = true;
      });
  }

  verDetalle(pais: Pais) {
    console.log(pais.name.common);
    this.router.navigate(['detalle', pais.cca2]);
  }
}
