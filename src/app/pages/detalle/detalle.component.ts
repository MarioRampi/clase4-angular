import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  code: string = '';
  isAdmin = false;
  email: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    const code = this.route.snapshot.params.code;

    this.code = code;

    this.isAdmin = this.authService.isAdmin();
    this.email = this.authService.getPayload()?.user;
  }

  onClick() {
    console.log('onClick');
    this.router.navigateByUrl('listado');
  }

  listar() {
    this.authService.listar()
      .subscribe({
        next: (data: any) => {
          console.log('data', data);
        },
        error: (err) => {
          console.log('err', err);
        }
      });
  }
}
