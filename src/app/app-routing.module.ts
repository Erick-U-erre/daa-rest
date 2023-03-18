import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanReservaComponent } from './can-reserva/can-reserva.component';
import { CLlegadaComponent } from './cllegada/cllegada.component';
import { ConReservaComponent } from './con-reserva/con-reserva.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { GReservasComponent } from './greservas/greservas.component';
import { IniciandoSesionComponent } from './iniciando-sesion/iniciando-sesion.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { OcupacionComponent } from './ocupacion/ocupacion.component';
import { PReservaComponent } from './preserva/preserva.component';
import { RegistrandoUsuarioComponent } from './registrando-usuario/registrando-usuario.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';

const routes: Routes = [
  { path: '', component: IniciandoSesionComponent},
  { path: 'RegistrandoUsuario', component: RegistrandoUsuarioComponent},
  { path: 'PReserva', component: PReservaComponent},
  { path: 'ConReserva', component: ConReservaComponent},
  { path: 'CanReserva', component: CanReservaComponent},
  { path: 'GReservas', component: GReservasComponent},
  { path: 'Confirmacion', component: ConfirmacionComponent},
  { path: 'Ocupacion', component: OcupacionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
