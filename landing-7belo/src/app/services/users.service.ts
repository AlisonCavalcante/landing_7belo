import { Constantes } from './../utils/constantes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  user: User = {
    name: 'Alison',
    email: 'alison@gmail.com',
    gender: 'male',
    status: 'active',
  };

  constructor(private httpClient: HttpClient) {}

  create(user: User): Observable<User> {
    return this.httpClient.post<User>(Constantes.URL_USERS, user);
  }
  getAll(): Observable<User[]>{
    return this.httpClient.get<User[]>(Constantes.URL_USERS);
  }
}
