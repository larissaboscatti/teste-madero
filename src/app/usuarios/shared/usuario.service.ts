import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

import {Observable,} from 'rxjs';
import { Usuario } from './';
import { UsuarioListReturn } from '../model';

@Injectable({providedIn: 'root'})
export class UsuarioService {
  constructor(private http: HttpClient) {

  }

    getListUsuarios():Observable<UsuarioListReturn>{
    return new Observable<UsuarioListReturn>(observer => {
        this.http.get<UsuarioListReturn>('https://gorest.co.in/public/v1/users').subscribe( data =>{
            observer.next(data);
        })
    })
}

}
