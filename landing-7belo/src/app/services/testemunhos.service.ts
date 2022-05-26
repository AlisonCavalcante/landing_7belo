import { Constantes } from './../utils/constantes';
import { Observable, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coment } from '../models/coment.model';

@Injectable({
  providedIn: 'root'
})
export class TestemunhosService {

  comentario: Coment[] = [
    {
      name: 'Alison',
      email: 'alison@gmail.com',
      body: 'São as melhores',
    },
    {
      name: 'Ayrton',
      email: 'ayrton@gmail.com',
      body: 'Muito boas',
    },
    {
      name: 'clara',
      email: 'clara@gmail.com',
      body: 'Não fico sem!',
    },
    {
      name: 'aline',
      email: 'aline@gmail.com',
      body: 'Sou viciada!',
    },
  ];
  constructor(private httpClient: HttpClient) { }

  create(testemunho: Coment, idPost: string): Observable<Coment>{
    return this.httpClient.post<Coment>(Constantes.URL_BASE + Constantes.URL_COMENTS + `${idPost}/comments`, testemunho);
  }
  createPost(post: any, idUser: string | undefined): Observable<any>{
    return this.httpClient.post<any>(Constantes.URL_BASE + Constantes.URL_POSTS + `/${idUser}/posts`, post).pipe(
      take(1)
    );
  }
  get(idPost: string): Observable<any>{
    return this.httpClient.get<any>(Constantes.URL_BASE + Constantes.URL_COMENTS + `${idPost}/comments`).pipe(
      take(1)
    )
  }

}
