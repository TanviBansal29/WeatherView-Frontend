import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!sessionStorage.getItem('jwt')) {
      return next.handle(req);
    }
    const headers = req.headers.set(
      'Authorization',
      `Bearer ${sessionStorage.getItem('jwt')}`
    );
    const authReq = req.clone({ headers });
    return next.handle(authReq);
  }
}
