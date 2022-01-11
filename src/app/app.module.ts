import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiTagComponent } from './components/mi-tag/mi-tag.component';
import { BotonComponent } from './components/boton/boton.component';
import { InputComponent } from './components/input/input.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { MatButtonModule } from '@angular/material/button';
import { ErrorComponent } from './pages/error/error.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { PaisService } from './service/pais.service';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { PaisItemComponent } from './components/pais-item/pais-item.component';
import { RegionComponent } from './pages/region/region.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    MiTagComponent,
    BotonComponent,
    InputComponent,
    InicioComponent,
    DetalleComponent,
    ErrorComponent,
    ListadoComponent,
    PaisItemComponent,
    RegionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,

    HttpClientModule,

    BrowserAnimationsModule,

    NzButtonModule,

    MatButtonModule,

    MatProgressSpinnerModule,

    MatCardModule,
  ],
  providers: [
    PaisService,
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
