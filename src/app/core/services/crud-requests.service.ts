import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudRequestsService {

  constructor(private http: HttpClient) { }

  get = (url: string) => {
    return this.http.get(environment.baseUrl + url);
  }
  post = (url: string, params: any = null) => {
    return this.http.post(environment.baseUrl + url, params);
  }

  put = (url: string, params: any = null) => {
    return this.http.put(environment.baseUrl + url, params);
  }

  delete = (id: any, url: string) => {
    return this.http.get(environment.baseUrl +  url);
  }

  UploadFile(data: any) {
    return this.http.post(`${environment.baseUrl}/UploadFile`, data);
  }
}
