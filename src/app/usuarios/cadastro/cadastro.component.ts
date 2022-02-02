import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioListReturn } from '..';
import { UsuarioService, Usuario } from '../shared';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuarios: Usuario;
  consultaUsuarios: Observable<UsuarioListReturn>;
  
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {

  }

  criarUsuario(nome,email,genero,status){
    const usuario = {
      name: nome,
      email: email,
      gender: genero,
      status: status
    };
    this.consultaUsuarios = this.usuarioService.createUsuario(usuario);
  }

}
