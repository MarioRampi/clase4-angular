import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButonComponent } from './components/buton/buton.component';
import { InputComponent } from './components/input/input.component';
import { LabelComponent } from './components/label/label.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { InfoMotoComponent } from './components/info-moto/info-moto.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { ErrorComponent } from './pages/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PaisService } from './service/pais.service';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PaisItemComponent } from './components/pais-item/pais-item.component';

import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './service/auth.service';
import { HeadersInterceptor } from './service/headers.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ButonComponent,
    InputComponent,
    LabelComponent,
    InicioComponent,
    ListadoComponent,
    InfoMotoComponent,
    DetalleComponent,
    ErrorComponent,
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
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
