import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UsuarioService} from './shared';
import { ListarComponent } from './listar';
import { CadastroComponent } from './cadastro';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    ListarComponent,
    CadastroComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[
  UsuarioService
  ]
})
export class UsuariosModule { }
