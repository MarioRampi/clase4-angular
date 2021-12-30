import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {
  @Input() label = 'Enviar';
  @Input() clase = 'success';

  @Output() apretar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log('Click en app-boton');
    this.apretar.emit("Dato enviado desde app-boton");
  }

}
