import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
