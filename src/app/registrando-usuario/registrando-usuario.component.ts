import { Component, OnInit } from '@angular/core';
import { RegistrandoUsuarioService } from './registrando-usuario.service';

@Component({
  selector: 'app-registrando-usuario',
  templateUrl: './registrando-usuario.component.html',
  styleUrls: ['./registrando-usuario.component.css']
})
export class RegistrandoUsuarioComponent implements OnInit{
  RegistrandoUsuario: any =[];
  headerVisible: boolean = true;

  constructor(private RegistrandoUsuarioService: RegistrandoUsuarioService) {}

  ngOnInit() {
  this.RegistrandoUsuarioService.getRegistrandoUsuario().subscribe((res: any) => (this.RegistrandoUsuario = res));
  }

  hideShowHeader() {
    this.headerVisible = !this.headerVisible;
  }
}
