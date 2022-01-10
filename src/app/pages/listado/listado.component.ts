import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { PaisService } from 'src/app/services/pais.service';
import { Pais } from 'src/app/classes/pais';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  listadoPaises: Pais[] = [];
  loading = true;

  constructor(
    private paises: PaisService,
    private router: Router,
    // private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.traePaises();
  }

  traePaises() {
    this.loading = true; // mostramos el loading
    this.listadoPaises = []; // vacio el array
    // this.http.get('https://restcountries.com/v3.1/all')
    this.paises.traePaises()
      .subscribe(data => {
        console.log(data);
        this.loading = false;
        this.listadoPaises = data;
        // data.forEach(pais => {
        //   pais.
        // })
      }, error => {
        console.log(error);
        this.loading = false;
      });
  }

  ir(pais: Pais) {
    console.log('onIr');
    // this.router.navigateByUrl('/listado');
    // this.router.navigate(['/listado']);
    this.router.navigate(['/detalle', pais.cioc]);
  }
}
