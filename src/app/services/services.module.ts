import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisesService } from './paises.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  providers: [
    PaisesService,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class ServicesModule { }
