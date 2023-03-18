import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrandoUsuarioService {
  constructor(private httpClient : HttpClient) { }

  getRegistrandoUsuario:any= ()=> this.httpClient.get('http://localhost:3000/RegistrandoUsuario');

}
