import { Component, Input, OnInit } from '@angular/core';
import { Moto } from 'src/app/class/moto';

@Component({
  selector: 'moto-card',
  templateUrl: './moto-card.component.html',
  styleUrls: ['./moto-card.component.css']
})
export class MotoCardComponent implements OnInit {
  @Input() moto: Moto | undefined;
  @Input() marca = '';
  @Input() modelo = '';

  @Input() imageUrl = '';
  @Input() imageAlt = 'imagen';

  @Input() cilindrada = '';
  @Input() potencia = '';
  @Input() peso = '';

  constructor() { }

  ngOnInit(): void {
  }

}
