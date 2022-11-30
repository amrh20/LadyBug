import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { SettingService } from '../services/setting.service';
import { LoadingService } from '../services/loading.service';
//
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private _SettingService: SettingService,private _LoadingService: LoadingService) { }
  private index: any = 0;
  showLoaderCustom: any[] = [];

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      if (
        request.method != 'POST' && request.method != 'PUT'
        ) {
          this.showLoaderCustom.push(' ');
          this._LoadingService.showLoading();
        return next.handle(request).pipe(finalize(() => {
          this.showLoaderCustom.pop();
          if (this.showLoaderCustom?.length === 0) {
            this._LoadingService.hideLoading();
          }
        }));
      }  else {
        return next.handle(request);
      }
  }
}
