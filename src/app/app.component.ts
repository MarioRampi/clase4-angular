import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public nombre = 'Mario';

  public imageUrl = 'assets/moto2.jpeg';

  public btnLabel = "Aceptar";

  public list = [
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
  ]

  handleClick(event: any) {
    console.log('handleClick', event);
  }
}
