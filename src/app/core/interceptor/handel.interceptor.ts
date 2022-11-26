import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class HandelInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      headers: new HttpHeaders({
          'Accept': 'application/json',
          'Accept-Language': 'all',
          'x-api-key': '20LAdyx%ano@0o!#vXLZBUg65'
      })
  });
  const token: any = localStorage.getItem('_token');

  if (token) {
      request = request.clone({headers: request.headers.set('Authorization', 'bearer ' + token)});
  }
  return next.handle(request).pipe(
      tap(
          () => {
          },
          err => {
              console.log('Error');
          }
      )
  );
  }
}
