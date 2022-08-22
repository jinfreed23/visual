import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AdministradorproductosModule} from "./administradorproductos/administradorproductos.module";
import {VendedorModule} from "./vendedor/vendedor.module";
import {AdministradorModule} from "./administrador/administrador.module";
import {LandingpageModule} from "./landingpage/landingpage.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AdministradorproductosModule,
    VendedorModule,
    AdministradorModule,
    LandingpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
