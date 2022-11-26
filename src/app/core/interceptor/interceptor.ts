import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './error.interceptor';
import { HandelInterceptor } from './handel.interceptor';
import { LoadingInterceptor } from './loding.interceptor';


export const Interceptors = [
    { provide: HTTP_INTERCEPTORS, useClass:  ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass:  HandelInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass:  LoadingInterceptor, multi: true },
];
