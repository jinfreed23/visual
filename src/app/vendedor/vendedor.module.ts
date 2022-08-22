import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendedorRoutingModule } from './vendedor-routing.module';
import { ClientesComponent } from './components/clientes/clientes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { BoletaComponent } from './components/boleta/boleta.component';
import { TableroControlComponent } from './components/tablero-control/tablero-control.component';


@NgModule({
  declarations: [
    ClientesComponent,
    DashboardComponent,
    ReportesComponent,
    BoletaComponent,
    TableroControlComponent
  ],
  imports: [
    CommonModule,
    VendedorRoutingModule
  ]
})
export class VendedorModule { }
