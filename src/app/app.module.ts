import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ButonComponent } from './components/buton/buton.component';
import { InputComponent } from './components/input/input.component';
import { LabelComponent } from './components/label/label.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { InfoMotoComponent } from './components/info-moto/info-moto.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoComponent,
    ButonComponent,
    InputComponent,
    LabelComponent,
    InicioComponent,
    ListadoComponent,
    InfoMotoComponent
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
