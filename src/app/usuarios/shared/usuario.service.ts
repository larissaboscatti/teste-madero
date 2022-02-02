import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable, } from 'rxjs';
import { Usuario } from './';
import { UsuarioListReturn } from '../model';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
    constructor(private http: HttpClient) {

    }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer 8fd9474ab840ab4918512bfb7a97767ce16e145d98ca396267e324d2321a1e09'
        })
    };

    getListUsuarios(): Observable<UsuarioListReturn> {
        return new Observable<UsuarioListReturn>(observer => {
            this.http.get<UsuarioListReturn>('https://gorest.co.in/public/v1/users').subscribe(data => {
                observer.next(data);
            })
        })
    }

    createUsuario(Usuario): Observable<UsuarioListReturn> {
        return new Observable<UsuarioListReturn>(observer => {
            this.http.post<UsuarioListReturn>('https://gorest.co.in/public/v1/users', Usuario,this.httpOptions).subscribe(data => {
                console.log(JSON.stringify(data))
                observer.next(data);
            })
        })
    }

    UpdateUsuario(id:number,Usuario): Observable<UsuarioListReturn> {
        return new Observable<UsuarioListReturn>(observer => {
            this.http.patch<UsuarioListReturn>('https://gorest.co.in/public/v1/users/' + id , Usuario,this.httpOptions).subscribe(data => {
                console.log(JSON.stringify(data))
                observer.next(data);
            })
        })
    }

    deleteUsuario(id:number): Observable<UsuarioListReturn> {
        return new Observable<UsuarioListReturn>(observer => {
            this.http.delete<UsuarioListReturn>('https://gorest.co.in/public/v1/users/' + id ,this.httpOptions).subscribe(data => {
                console.log(JSON.stringify(data))
                observer.next(data);
            })
        })
    }

}
