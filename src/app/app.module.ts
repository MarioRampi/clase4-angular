import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonComponent } from './components/boton/boton.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InputComponent } from './components/input/input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListadoComponent } from './pages/listado/listado.component';
import { ErrorComponent } from './pages/error/error.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PaisService } from './services/pais.service';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PaisItemComponent } from './components/pais-item/pais-item.component';
import { LoginComponent } from './pages/login/login.component';
import { InterceptorInterceptor } from './services/interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    InicioComponent,
    InputComponent,
    ListadoComponent,
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
    MatCardModule,

    HttpClientModule,

    MatProgressSpinnerModule,

    ReactiveFormsModule,
  ],
  providers: [
    PaisService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
