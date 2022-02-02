import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioService, Usuario} from '../shared';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  usuarios: Usuario[];
  //consultaUsuarios: Observable<UsuarioListReturn>;
  
  constructor(private usuarioService: UsuarioService, private router: Router, private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:any) => {
        const id = params['id'];
        console.log(id);

      }
    );    
  }

  // atualizarUsuario(id,nome,email,genero,status){
  //   const usuario = {
  //     name: nome,
  //     email: email,
  //     gender: genero,
  //     status: status
  //   };
  //   this.consultaUsuarios = this.usuarioService.UpdateUsuario(id, usuario);
  // }

onEdit(id){
    this.router.navigate(['update', id], {relativeTo: this.route});
}
}
