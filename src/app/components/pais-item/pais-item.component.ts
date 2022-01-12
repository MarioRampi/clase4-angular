import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pais } from 'src/app/classes/pais';

@Component({
  selector: 'pais-item',
  templateUrl: './pais-item.component.html',
  styleUrls: ['./pais-item.component.scss']
})
export class PaisItemComponent implements OnInit {
  @Input() pais: Pais = new Pais();

  @Output() onPais = new EventEmitter<Pais>();

  constructor() { }

  ngOnInit(): void {
  }

  click() {
    // console.log('click en pais-item');
    this.onPais.emit(this.pais);
  }
}
