import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonComponent } from './components/boton/boton.component';
import { LabelComponent } from './components/label/label.component';
import { H1Component } from './components/h1/h1.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListadoComponent } from './pages/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    LabelComponent,
    H1Component,
    InicioComponent,
    ListadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
