import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { BotonComponent } from './components/boton/boton.component';
import { InputComponent } from './components/input/input.component';
import { LabelComponent } from './components/label/label.component';
import { ErrorComponent } from './pages/error/error.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaisService } from './service/pais.service';
import { PaisItemComponent } from './components/pais-item/pais-item.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListadoComponent,
    BotonComponent,
    InputComponent,
    LabelComponent,
    ErrorComponent,
    DetalleComponent,
    PaisItemComponent
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
  providers: [
    PaisService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
