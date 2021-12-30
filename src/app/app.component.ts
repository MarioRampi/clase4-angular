import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: '<h1>Hola Angular!</h1>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Mario';

  imageUrl = 'assets/moto2.jpeg';

  btnLabel = 'Aceptar';

  mostrar = false;

  list = [
    'success', 'info', 'danger',
    'success', 'info', 'danger',
    'success', 'info', 'danger',
    'success', 'info', 'danger',
    'success', 'info', 'danger',
    'success', 'info', 'danger',
    'success', 'info', 'danger',
    'success', 'info', 'danger',
    'success', 'info', 'danger',
    'success', 'info', 'danger',
    'success', 'info', 'danger',
    'success', 'info', 'danger',
    'success', 'info', 'danger',
  ];

  onMostrar() {
    this.mostrar = !this.mostrar;
  }

  onClick(event: any) {
    console.log('onClick:', event);
  }
}
