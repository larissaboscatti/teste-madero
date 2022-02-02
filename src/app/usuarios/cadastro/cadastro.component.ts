import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioListReturn } from '..';
import { UsuarioService, Usuario } from '../shared';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Location } from '@angular/common';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  usuarios: Usuario;
  consultaUsuarios: Observable<UsuarioListReturn>;
  
  constructor(private usuarioService: UsuarioService, private fb:FormBuilder, private location: Location) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email:[],
      name: [],
      gender: [],
      status: []
    });
  }

  hasError(field: string){
    return this.form.get(field).errors;
  }

  // criarUsuario(nome,email,genero,status){
  //   const usuario = {
  //     name: nome,
  //     email: email,
  //     gender: genero,
  //     status: status
  //   };
  //   this.consultaUsuarios = this.usuarioService.createUsuario(usuario);
  // }

onSubmit(){
  this.submitted = true;
  console.log(this.form.value);
  if(this.form.valid){
    console.log('submit');
    this.usuarioService.createUsuario(this.form.value).subscribe(
      success => {
        console.log('cadastro realizado com sucesso');
        this.location.back();
      },
      error => console.error(error),
      () => console.log('request completo')

    );
  }
}

}
