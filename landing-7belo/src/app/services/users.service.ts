import { Constantes } from './../utils/constantes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  create(user: User): Observable<User>{
    return this.httpClient.post<User>(Constantes.URL_USERS, user);
  }

}
