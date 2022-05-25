import { Constantes } from './../utils/constantes';
import { Observable, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coment } from '../models/coment.model';

@Injectable({
  providedIn: 'root'
})
export class TestemunhosService {

  constructor(private httpClient: HttpClient) { }

  create(testemunho: Coment): Observable<Coment>{
    return this.httpClient.post<Coment>(Constantes.URL_BASE + Constantes.URL_COMENTS, testemunho);
  }

  get(): Observable<any>{
    return this.httpClient.get<any>(Constantes.URL_BASE + Constantes.URL_COMENTS).pipe(
      take(1)
    )
  }

}
