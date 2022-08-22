import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingpageRoutingModule } from './landingpage-routing.module';
import { WebmainComponent } from './components/webmain/webmain.component';
import { RegistroComponent } from './components/registro/registro.component';


@NgModule({
  declarations: [
    WebmainComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    LandingpageRoutingModule
  ]
})
export class LandingpageModule { }
