import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { BotonComponent } from './components/boton/boton.component';
import { InputComponent } from './components/input/input.component';
import { LabelComponent } from './components/label/label.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListadoComponent,
    BotonComponent,
    InputComponent,
    LabelComponent
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
