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

  atualizarUsuario(id){
    const usuario = {
      name: "Larissa ",
      email: 'larissaboscatt@hotmail.com',
      gender: 'female',
      status: 'active'
    };
    this.consultaUsuarios = this.usuarioService.UpdateUsuario(id, usuario);
  }


}
