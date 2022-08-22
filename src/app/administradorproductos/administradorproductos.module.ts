import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorproductosRoutingModule } from './administradorproductos-routing.module';
import { AlmacenComponent } from './components/almacen/almacen.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AlmacenComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdministradorproductosRoutingModule
  ]
})
export class AdministradorproductosModule { }
