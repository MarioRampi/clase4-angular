import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buton',
  templateUrl: './buton.component.html',
  styleUrls: ['./buton.component.scss']
})
export class ButonComponent implements OnInit {
  @Input() label = 'Valor por defecto';
  @Input() clase = 'success';

  @Output() apretar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log('click en boton');
    this.apretar.emit('Evento desde app-boton');
  }

}
