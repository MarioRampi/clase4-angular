import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { BotonComponent } from './components/boton/boton.component';
import { LabelComponent } from './components/label/label.component';
import { H1Component } from './components/h1/h1.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListadoComponent,
    BotonComponent,
    LabelComponent,
    H1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
