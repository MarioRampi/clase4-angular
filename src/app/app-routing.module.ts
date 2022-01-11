import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { ErrorComponent } from './pages/error/error.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { RegionComponent } from './pages/region/region.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'listado',
    component: ListadoComponent,
  },
  {
    path: 'region/:region',
    component: RegionComponent
  },
  {
    path: 'detalle',
    component: DetalleComponent,
  },
  {
    path: 'detalle/:code',
    component: DetalleComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
