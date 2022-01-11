import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
