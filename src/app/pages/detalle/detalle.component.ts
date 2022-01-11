import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  code: string = '';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const code = this.route.snapshot.params.code;

    this.code = code;
  }

}
