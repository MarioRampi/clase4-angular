import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAdminGuard } from './guards/is-admin.guard';
import { LoggedGuard } from './guards/logged.guard';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { ErrorComponent } from './pages/error/error.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [],
    canActivate: [LoggedGuard]
  },
  {
    path: 'listado',
    component: ListadoComponent,
    canActivate: [LoggedGuard, IsAdminGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'detalle',
    component: DetalleComponent,
    canActivate: [LoggedGuard]
  },
  {
    path: 'detalle/:id',
    component: DetalleComponent,
    canActivate: [LoggedGuard]
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
