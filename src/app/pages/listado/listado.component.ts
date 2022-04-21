import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from 'src/app/class/pais';
import { AuthService } from 'src/app/service/auth.service';
// import { HttpClient } from '@angular/common/http';
import { PaisService } from 'src/app/service/pais.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  // api = 'https://restcountries.com/v3.1/all';
  isLogged = false;

  paises: Pais[] = [];

  loading = true;

  error = false;

  constructor(
    private router: Router,
    // private http: HttpClient,
    private paisService: PaisService,
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.traerPaises();

    this.isLogged = this.auth.isLogged();
  }

  traerPaises() {
    this.paises = [];
    this.loading = true;
    this.error = false;

    // this.http.get<any[]>(this.api)
    this.paisService.traerPaises()
      .subscribe(data => {
        console.log(data);

        // data.forEach(item => item.name.);

        this.loading = false;

        this.paises = data;
      }, e => {
        console.log(e);
        this.loading = false;
        this.error = true;
      })
  }

  ir(pais: Pais) {
    console.log(pais);
    this.router.navigate(['detalle', pais.fifa]);
    // this.router.navigateByUrl('');
  }

}
