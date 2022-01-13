import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  nombre: string = 'Mario';

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
    'success', 'info', 'danger',
    'success', 'info', 'danger',
    'success', 'info', 'danger',
    'success', 'info', 'danger',
    'success', 'info', 'danger',
    'success', 'info', 'danger',
    'success', 'info', 'danger',
  ];

  public onClick(event: any) {
    console.log('onClick:', event);
  }

  onMostrar() {
    this.mostrar = !this.mostrar;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
