import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {
  @Input() label = 'Enviar';

  @Input() clase = 'success';

  @Output() apretar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log('click en app-boton');
    this.apretar.emit('Datos enviados desde evento app-boton'); // Estoy envando datos
  }

}
