import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {
  nombre = 'Mario';
  imageUrl = './assets/moto2.jpeg';
  label = 'Aceptar';

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: any) {
    console.log('onClick', event);
  }

}
