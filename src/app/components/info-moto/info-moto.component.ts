import { Component, Input, OnInit } from '@angular/core';
import { Moto } from 'src/app/classes/moto';

@Component({
  selector: 'info-moto',
  templateUrl: './info-moto.component.html',
  styleUrls: ['./info-moto.component.scss']
})
export class InfoMotoComponent implements OnInit {
  // @Input() marca = '';
  // @Input() modelo = '';
  // @Input() image = '';
  // @Input() cilndrada = '';
  // @Input() potencia = '';
  // @Input() peso = '';
  @Input() moto: Moto | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
