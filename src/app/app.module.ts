import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventarioComponent } from './component/inventario/inventario.component';
import { ModalComponent } from './modal/modal.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { EmpleadoComponent } from './component/empleado/empleado.component';
import { PolizaComponent } from './component/poliza/poliza.component'

@NgModule({
  declarations: [
    AppComponent,
    InventarioComponent,
    ModalComponent,
    EmpleadoComponent,
    PolizaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
