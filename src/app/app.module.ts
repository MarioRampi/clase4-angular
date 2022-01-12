import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonComponent } from './components/boton/boton.component';
import { LabelComponent } from './components/label/label.component';
import { H1Component } from './components/h1/h1.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { ErrorComponent } from './pages/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaisItemComponent } from './components/pais-item/pais-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    LabelComponent,
    H1Component,
    InicioComponent,
    ListadoComponent,
    DetalleComponent,
    ErrorComponent,
    PaisItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,

    BrowserAnimationsModule,

    MatButtonModule,

    HttpClientModule,

    MatProgressSpinnerModule,

    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
