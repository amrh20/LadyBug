import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable()
export class HandelInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.includes('admin_businesses')){
      request = request.clone({
        headers: new HttpHeaders({
            'Accept': 'application/json',
            'x-api-key': '20LAdyx%ano@0o!#vXLZBUg65'
        })
    });
    }else{
      request = request.clone({
        headers: new HttpHeaders({
            'Accept': 'application/json',
            'Accept-Language': 'all',
            'x-api-key': '20LAdyx%ano@0o!#vXLZBUg65'
        })
    });
    }

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
