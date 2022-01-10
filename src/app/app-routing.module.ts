import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { ErrorComponent } from './pages/error/error.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListadoComponent } from './pages/listado/listado.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [],

  },
  {
    path: 'listado',
    component: ListadoComponent
  },
  {
    path: 'detalle',
    component: DetalleComponent
  },
  {
    path: 'detalle/:id',
    component: DetalleComponent
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
