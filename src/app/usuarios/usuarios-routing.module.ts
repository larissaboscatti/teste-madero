import { Routes } from '@angular/router';
import { ListarComponent } from './listar';
import { CadastroComponent } from './cadastro';

export const UsuarioRoutes: Routes = [
	
	// {
	// 	path:'usuarios',
	// 	redirecTo: 'usuarios/listar'
	// }
	{ 
		path: 'usuarios/listar',
		component: ListarComponent 
	},
	{
		path: 'usuarios/cadastrar',
		component: CadastroComponent 
	}

];