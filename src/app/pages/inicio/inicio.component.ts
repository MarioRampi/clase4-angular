import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {


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

  ngOnInit(): void {

  }
  onClick(event: any) {
    console.log('onClick =>', event);
  }

}
