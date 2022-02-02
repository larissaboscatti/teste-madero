import { Component, OnInit } from '@angular/core';
import { Observable, } from 'rxjs';
import { UsuarioService, Usuario } from '../shared';
import { UsuarioListReturn } from '../model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  usuarios: Usuario[];
  consultaUsuarios: Observable<UsuarioListReturn>;
  novoUsuario: Usuario;

  constructor(private usuarioService: UsuarioService, private router: Router, private route: ActivatedRoute) {
    this.consultaUsuarios = usuarioService.getListUsuarios();
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        console.log(id);

      }
    );
    this.consultaUsuarios.subscribe(query => {
      this.usuarios = query.data;
    })
  }

  onRefresh(): void {
    window.location.reload();
  }

  onEdit(id) {
    this.router.navigate(['../update', id], { relativeTo: this.route });
  }

  onDelete(id) {
    this.usuarioService.deleteUsuario(id).subscribe(
      success => {
        this.onRefresh();
      },
      error => console.error(error)
    );
  }

}


