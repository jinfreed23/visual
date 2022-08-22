import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorproductosRoutingModule } from './administradorproductos-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { TableroControlComponent } from './components/tablero-control/tablero-control.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InventarioComponent,
    ReportesComponent,
    TableroControlComponent
  ],
  imports: [
    CommonModule,
    AdministradorproductosRoutingModule
  ]
})
export class AdministradorproductosModule { }
