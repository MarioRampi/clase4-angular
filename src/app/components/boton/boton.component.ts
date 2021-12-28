import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {
  @Input() label = 'Enviar'; // Atributos
  @Input() clase = 'aqua'; // Atributos

  @Output() apretar = new EventEmitter(); // Evento

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    // console.log('click en app-boton');
    this.apretar.emit('Sou un evento emitido en app-boton');
  }

}
