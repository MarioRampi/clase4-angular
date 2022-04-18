import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from 'src/app/classes/pais';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    console.log(this.router);
  }

  onIr() {
    console.log('onIr');
    this.router.navigateByUrl('/listado');
    // this.router.navigate(['/listado']);
    // this.router.navigate(['/detalle', pais.cioc]);
  }

  lista() {
    this.auth.traerLista();
  }
}
