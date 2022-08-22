import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ReportesComponent} from "./components/reportes/reportes.component";
import {InventarioComponent} from "./components/inventario/inventario.component";
import {TableroControlComponent} from "./components/tablero-control/tablero-control.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'reportes',
        component: ReportesComponent
      },
      {
        path: 'inventario',
        component: InventarioComponent
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
export class AdministradorproductosRoutingModule { }
