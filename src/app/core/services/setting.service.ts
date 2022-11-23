import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
const duration =2000;
@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private toastService: HotToastService) {}
  infoHot =()=>{
    this.toastService.info("I must be super-useful!",{
      duration: duration
    })
  }
  warningHot =()=>{
    this.toastService.warning("I must be super-useful!",{
      duration: duration
    })
  }
  errorHot =()=>{
    this.toastService.error("I must be super-useful!",{
      duration: duration
    })
  }
  successHot =()=>{
    this.toastService.success("I must be super-useful!",{
      duration: duration
    })
  }

}