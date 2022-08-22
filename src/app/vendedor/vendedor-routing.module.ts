import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ClientesComponent} from "./components/clientes/clientes.component";
import {ReportesComponent} from "./components/reportes/reportes.component";
import {BoletaComponent} from "./components/boleta/boleta.component";
import {TableroControlComponent} from "./components/tablero-control/tablero-control.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'clientes',
        component: ClientesComponent
      },
      {
        path: 'reportes',
        component: ReportesComponent
      },
      {
        path: 'boleta',
        component: BoletaComponent
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
export class VendedorRoutingModule { }
