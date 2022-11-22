import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudRequestsService {

  constructor(private http: HttpClient) { }

  get = (url: string) => {
    return this.http.get(environment.baseUrl + '/api/' + url);
  }
  post = (url: string, params: any = null) => {
    return this.http.post(environment.baseUrl + '/api/' + url, params);
  }

  put = (url: string, params: any = null) => {
    return this.http.post(environment.baseUrl + '/api/' + url, params);
  }

  delete = (id: any, url: string) => {
    return this.http.get(environment.baseUrl + '/api/' + url);
  }

  UploadFile(data: any) {
    return this.http.post(`${environment.baseUrl}/UploadFile`, data);
  }
}
