import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PersonalComponent } from './components/personal/personal.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { TableroControlComponent } from './components/tablero-control/tablero-control.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PersonalComponent,
    ReportesComponent,
    TableroControlComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule
  ]
})
export class AdministradorModule { }
