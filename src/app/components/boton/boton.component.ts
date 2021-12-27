import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {
  @Input() label = 'Enviar';
  @Input() clase = 'aqua';

  @Output() apretar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.apretar.emit("Hola");
  }
}
