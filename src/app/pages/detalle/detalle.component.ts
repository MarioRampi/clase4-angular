import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  code: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private paisService: PaisesService,
  ) { }

  ngOnInit(): void {
    const code = this.route.snapshot.params.code;
    console.log(code);
    this.code = code;
    if (code) {
      this.paisService.traerPaisPorCodigo(code)
        .subscribe(data => {
          console.log(data);
        }, e => {
          console.log(e);
        });
    }
  }

  onClick() {
    console.log('onclick');
    this.router.navigateByUrl('/listado');
    // this.router.navigate(['/']);
  }

}
