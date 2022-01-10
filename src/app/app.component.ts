import { Component } from '@angular/core';

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

  onEnviar(event: any) {
    console.log('ON ENVIAR', event);
    console.log('variable title: ', this.title);
  }
}
