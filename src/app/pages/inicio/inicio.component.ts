import { Component, OnInit } from '@angular/core';
import { Moto } from 'src/app/classes/moto';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nombre = 'Mario';

  imageUrl = 'assets/moto2.jpeg';

  btnLabel = 'Aceptar';

  list: Moto[] = [
    // 'success', 'info', 'danger',
    { marca: 'Yamaha', modelo: 'M1', cilindrada: '1000cc', image: 'assets/moto2.jpeg' },
    { marca: 'Honda', modelo: 'CBR', cilindrada: '1000cc', image: 'assets/moto2.jpeg' },
    { marca: 'Yamaha', modelo: 'M6', cilindrada: '600', image: 'assets/moto2.jpeg' },
    { marca: 'MV Agusta', modelo: 'Superveloce', cilindrada: '1000cc', image: 'assets/moto2.jpeg' },
  ]
  onClick(event: any) {
    console.log('onClick', event);
    // console.log(this.nombre);
  }
}
