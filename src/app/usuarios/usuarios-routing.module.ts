import { Routes } from '@angular/router';
import { ListarComponent } from './listar';
import { CadastroComponent } from './cadastro';
import { UpdateComponent } from './update';

export const UsuarioRoutes: Routes = [
	
	{ 
		path: 'usuarios/listar',
		component: ListarComponent 
	},
	{
		path: 'usuarios/cadastrar',
		component: CadastroComponent 
	},

	{
		path: 'usuarios/update',
		component: UpdateComponent 
	}

];