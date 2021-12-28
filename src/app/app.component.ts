import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombre = 'Mario';
  imageUrl = 'assets/image/moto2.jpeg';

  btnLabel = 'Aceptar';

  list = [
    'aqua',
    'red',
    'green',
    'aqua',
    'red',
    'green',
    'aqua',
    'red',
    'green',
    'aqua',
    'red',
    'green',
    'aqua',
    'red',
    'green',
    'aqua',
    'red',
    'green',
    'aqua',
    'red',
    'green',
    'aqua',
    'red',
    'green',
    'aqua',
    'red',
    'green',
    'aqua',
    'red',
    'green',
  ];

  onClick(event: any) {
    console.log('onClick', event);
  }
}
