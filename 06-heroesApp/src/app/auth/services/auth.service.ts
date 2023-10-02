import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environments } from 'src/app/environments/environments';

@Injectable({providedIn: 'root'})
export class AuthService {

  private baseURL = environments.baseUrl;

  constructor(private http: HttpClient) { }


}

