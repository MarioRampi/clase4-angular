import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAdminGuard } from './guards/is-admin.guard';
import { IsLoggedGuard } from './guards/is-logged.guard';
import { IsNotLoggedGuard } from './guards/is-not-logged.guard';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { ErrorComponent } from './pages/error/error.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    canActivate: [IsLoggedGuard]
  },
  {
    path: 'listado',
    component: ListadoComponent,
    canActivate: [IsLoggedGuard]
  },
  {
    path: 'detalle',
    component: DetalleComponent,
    canActivate: [IsLoggedGuard, IsAdminGuard]
  },
  {
    path: 'detalle/:code',
    component: DetalleComponent,
    canActivate: [IsLoggedGuard, IsAdminGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [IsNotLoggedGuard]
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
