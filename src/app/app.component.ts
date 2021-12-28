import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public nombre = 'Mario';
  imageUrl = 'assets/moto.jpeg';

  btnLabel = "Aceptar";

  list = [
    'aqua', 'red', 'blue',
    'aqua', 'red', 'blue',
    'aqua', 'red', 'blue',
    'aqua', 'red', 'blue',
    'aqua', 'red', 'blue',
    'aqua', 'red', 'blue',
    'aqua', 'red', 'blue',
    'aqua', 'red', 'blue',
    'aqua', 'red', 'blue',
    'aqua', 'red', 'blue',
    'aqua', 'red', 'blue',
    'aqua', 'red', 'blue',
    'aqua', 'red', 'blue',
  ]

  onClick(event: any) {
    console.log('onClick =>', event);
  }
}
