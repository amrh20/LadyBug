import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
const duration =2000;
@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private toastService: HotToastService) {}
  infoHot =(msg:any)=>{
    this.toastService.info(msg,{
      duration: duration
    })
  }
  warningHot =(msg:any)=>{
    this.toastService.warning(msg,{
      duration: duration
    })
  }
  errorHot =(msg:any)=>{
    this.toastService.error(msg,{
      duration: duration
    })
  }
  successHot =(msg:any)=>{
    this.toastService.success(msg,{
      duration: duration
    })
  }

}