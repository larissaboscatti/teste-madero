import { Component, OnInit } from '@angular/core';
import {Observable,} from 'rxjs';
import { UsuarioService, Usuario } from '../shared';
import { UsuarioListReturn } from '../model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  usuarios: Usuario[];
  consultaUsuarios: Observable<UsuarioListReturn>;

   constructor(private usuarioService: UsuarioService) {
      this.consultaUsuarios = usuarioService.getListUsuarios();
  }

  ngOnInit(): void {
      this.consultaUsuarios.subscribe(query => {
      this.usuarios = query.data;
     })
  }

  // remover($event: any, usuario: Usuarios): void {
  //   $event.preventDefault();
  //   if (confirm('Deseja remover usuario "' + usuario.name + '"?')) {
  //     this.usuarioService.remover(usuario.id);
  //     this.usuario = this.listarTodos();
  //   }
  // }

}
