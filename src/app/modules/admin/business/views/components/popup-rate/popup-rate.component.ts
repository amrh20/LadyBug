import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CrudRequestsService } from '../../../../../../core/services/crud-requests.service';
import { SettingService } from '../../../../../../core/services/setting.service';

@Component({
  selector: 'app-popup-rate',
  templateUrl: './popup-rate.component.html',
  styleUrls: ['./popup-rate.component.scss']
})
export class PopupRateComponent implements OnInit {

  showHide : boolean = false;
  @Input()isShow : boolean | any = false;
  @Input()rate : any = '';
  @Input()id : any = '';
  @Input()productName : any = '';

  @Output()isHide = new EventEmitter<any>();
  @Output()reGet = new EventEmitter<any>();

  constructor(private _crud:CrudRequestsService,private _setting:SettingService) {}

  ngOnInit(): void {}
  hideAlert($event : any) {
      if ($event.target.classList.contains('overly-alert')) {
          this.isHide.emit(false)

      }
  }
  close() {
      this.isHide.emit(false)

  }
  loading:any=false;
  send() {
      if (this.rate) {
        let data={
          business:this.id,
          rating:this.rate
        }
        this.loading=true;
        this._crud.post(`ladybug_rate_business`, data).subscribe(
          (res: any) => {
            this.loading = false;

            if (res.success) {
              this.isHide.emit(false)
              this.reGet.emit(true)
              this._setting.successHot(res.message);
              
            } else {
              
            this.isHide.emit(false)
              this._setting.errorHot(res.message);
            }
          },
          (err: any) => {
            this.isHide.emit(false)
            this.reGet.emit(false)
            this.loading = false;
            this._setting.errorHot(err.message);
          },
          () => {}
        );
      
      }else{
        this._setting.errorHot('يرجي تقييم المنتج اولا');

      }
  }
}
