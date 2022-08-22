import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {PersonalComponent} from "./components/personal/personal.component";
import {ReportesComponent} from "./components/reportes/reportes.component";
import {TableroControlComponent} from "./components/tablero-control/tablero-control.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'personal',
        component: PersonalComponent
      },
      {
        path: 'reportes',
        component: ReportesComponent
      },
      {
        path: 'tablero-control',
        component: TableroControlComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
