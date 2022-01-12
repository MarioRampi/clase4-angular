import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

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
