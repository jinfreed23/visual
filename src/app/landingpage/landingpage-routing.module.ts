import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WebmainComponent} from "./components/webmain/webmain.component";

const routes: Routes = [
  {
    path:'',
    component:WebmainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingpageRoutingModule { }
