import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { IniciandoSesionComponent } from './iniciando-sesion/iniciando-sesion.component';
import { RegistrandoUsuarioComponent } from './registrando-usuario/registrando-usuario.component';
import { PReservaComponent } from './preserva/preserva.component';
import { ConReservaComponent } from './con-reserva/con-reserva.component';
import { CanReservaComponent } from './can-reserva/can-reserva.component';
import { GReservasComponent } from './greservas/greservas.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { OcupacionComponent } from './ocupacion/ocupacion.component';
import { CLlegadaComponent } from './cllegada/cllegada.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroUsuarioComponent,
    InicioSesionComponent,
    IniciandoSesionComponent,
    RegistrandoUsuarioComponent,
    PReservaComponent,
    ConReservaComponent,
    CanReservaComponent,
    GReservasComponent,
    ConfirmacionComponent,
    OcupacionComponent,
    CLlegadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
