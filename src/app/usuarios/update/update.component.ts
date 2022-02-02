import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioListReturn, UsuarioService } from '..';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  consultaUsuarios: Observable<UsuarioListReturn>;
  
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  atualizarUsuario(id,nome,email,genero,status){
    const usuario = {
      name: nome,
      email: email,
      gender: genero,
      status: status
    };
    this.consultaUsuarios = this.usuarioService.UpdateUsuario(id, usuario);
  }


}
