import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { BotonComponent } from './components/boton/boton.component';
import { InputComponent } from './components/input/input.component';
import { H1Component } from './components/h1/h1.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { MotoCardComponent } from './components/moto-card/moto-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatCardHeader, MatCardModule } from '@angular/material/card';
import { ErrorComponent } from './pages/error/error.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PaisesService } from './services/paises.service';
import { PaisItemComponent } from './components/pais-item/pais-item.component';
import { ContinenteComponent } from './components/continente/continente.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,
    BotonComponent,
    InputComponent,
    H1Component,
    InicioComponent,
    DetalleComponent,
    MotoCardComponent,
    ErrorComponent,
    ListadoComponent,
    PaisItemComponent,
    ContinenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,

    HttpClientModule,

    MatProgressSpinnerModule,
  ],
  providers: [
    PaisesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
