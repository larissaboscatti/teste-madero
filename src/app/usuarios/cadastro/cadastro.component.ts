import { Component, OnInit } from '@angular/core';
import { UsuarioService, Usuario } from '../shared';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuarios: Usuario[];

  constructor() { }

  ngOnInit(): void {
  }


}
