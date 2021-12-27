import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {
  @Input() label: string = 'Enviar';
  @Input() clase: string = 'warn';

  @Output() apretar = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {

  }

  onClick() {
    // console.log('onClick');
    this.apretar.emit();
  }

}
