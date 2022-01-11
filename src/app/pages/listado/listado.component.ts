import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from 'src/app/class/pais';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  listaPaises: Pais[] = [];
  loading = true;
  error = false;

  constructor(
    // private http: HttpClient,
    private paisesService: PaisesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.traePaises();
  }

  traePaises() {
    this.listaPaises = [];
    this.loading = true;
    this.error = false;
    // this.http.get<object[]>('https://restcountries.com/v3.1/all')
    this.paisesService.traePaises()
      .subscribe(
        (data) => {
          console.log(data);
          this.loading = !true;
          this.listaPaises = data;
        },
        e => {
          console.log(e);
          this.loading = false;
          this.error = true;
        }
      )
  }

  verDetalle(pais: Pais) {
    console.log(pais);
    this.router.navigate(['detalle', pais.fifa]);
  }
}
