import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'webmain',
    pathMatch: 'full'
  },
  {
    path: 'webmain',
    loadChildren: () => import('./landingpage/landingpage.module').then(m => m.LandingpageModule)
  },
  {
    path: 'administradorproductos',
    loadChildren: () => import('./administradorproductos/administradorproductos.module').then(m => m.AdministradorproductosModule)
  },
  {
    path: 'administrador',
    loadChildren: () => import('./administrador/administrador.module').then(m => m.AdministradorModule)
  },
  {
    path: 'vendedor',
    loadChildren: () => import('./vendedor/vendedor.module').then(m => m.VendedorModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pagenotfound/pagenotfound.module').then(m => m.PagenotfoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
