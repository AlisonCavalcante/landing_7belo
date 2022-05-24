import { Constantes } from './../utils/constantes';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestemunhosService {

  constructor(private httpClient: HttpClient) { }

  create(testemunho: any): Observable<any>{
    return this.httpClient.post<any>(Constantes.URL_BASE + Constantes.URL_COMENTS, testemunho);
  }

  get(): Observable<any>{
    return this.httpClient.get<any>(Constantes.URL_BASE + Constantes.URL_COMENTS);
  }

}
