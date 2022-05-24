import { Constantes } from './../utils/constantes';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let token = request.clone({
        setHeaders: {
          Authorization: `Bearer ${Constantes.API_KEY}`,
        },
      });

    return next.handle(token);
  }
}
