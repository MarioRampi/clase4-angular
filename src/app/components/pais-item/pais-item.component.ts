import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pais } from 'src/app/class/pais';

@Component({
  selector: 'pais-item',
  templateUrl: './pais-item.component.html',
  styleUrls: ['./pais-item.component.scss']
})
export class PaisItemComponent implements OnInit {
  @Input() pais = new Pais();

  @Output() onPais = new EventEmitter<Pais>();

  constructor() { }

  ngOnInit(): void {
  }

  click() {
    this.onPais.emit(this.pais);
  }

}
