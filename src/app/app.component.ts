import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  // template: '<h1>Hola</h1>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'grupo-105';
  imageUrl = './assets/moto.jpg';
  nombre = 'Mario';

  btnLabel = 'Borrar';

  constructor(private router: Router) {

  }
  onEnviar(event: any) {
    console.log('ON ENVIAR', event);
    console.log('variable title: ', this.title);
  }

  salir() {
    localStorage.removeItem('token');

    this.router.navigate(['/login']);
  }
}
