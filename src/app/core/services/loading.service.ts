import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private isLoadingLoading$$ = new BehaviorSubject<boolean>(false);
  public isLoadingLoading$ = this.isLoadingLoading$$.asObservable();

  constructor() { }
  showLoading(){
    this.isLoadingLoading$$.next(true);


  }
  hideLoading(){
    this.isLoadingLoading$$.next(false);
  }
}
