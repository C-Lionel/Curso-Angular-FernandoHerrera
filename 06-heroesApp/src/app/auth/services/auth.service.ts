import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, pipe, tap } from 'rxjs';

import { environments } from 'src/app/environments/environments';
import { User } from '../interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class AuthService {

  private baseURL = environments.baseUrl;
  private user?: User;

  constructor(private http: HttpClient) { }

  get currentUser(): User | undefined {
    if ( !this.user ) return undefined;
    return structuredClone(this.user); // structuredClone() cumple la misma funcion que el operador spread '...' pero mas profundo
  }

  login( email: string, password: string ): Observable<User> {

    return this.http.get<User>(`${this.baseURL}/users/1`)
      .pipe(
        tap( user => this.user = user ),
        tap( user => localStorage.setItem('token', 'slkdpfpñ.akpsdasdp.jaosdhoias') )
      )
  }

  checkAuthentication(): Observable<boolean> {

    if (!localStorage.getItem('token')) return of(false) ;

    const token = localStorage.getItem('token');

    return this.http.get<User>(`${this.baseURL}/users/1`)
      .pipe(
        tap( user => this.user = user ),
        map( user => !!user ),
        catchError( err => of(false) )
      );
  }

  logout() {
    this.user = undefined;
    localStorage.clear()
  }

}

