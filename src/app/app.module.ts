import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { LoginComponent } from './pages/login/login.component';
import { HeadersInterceptor } from './service/headers.interceptor';

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
    PaisItemComponent,
    LoginComponent
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

    ReactiveFormsModule,
  ],
  providers: [
    PaisService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
