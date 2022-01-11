import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiTextoComponent } from './components/mi-texto/mi-texto.component';
import { BotonComponent } from './components/boton/boton.component';
import { InputComponent } from './components/input/input.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ErrorComponent } from './pages/error/error.component';

import { HttpClientModule } from '@angular/common/http';
import { ServicesModule } from './services/services.module';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PaisItemComponent } from './components/pais-item/pais-item.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    MiTextoComponent,
    BotonComponent,
    InputComponent,
    InicioComponent,
    DetalleComponent,
    ListadoComponent,
    ErrorComponent,
    PaisItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,

    BrowserAnimationsModule,

    MatButtonModule,

    HttpClientModule,

    ServicesModule,

    MatProgressSpinnerModule,

    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
