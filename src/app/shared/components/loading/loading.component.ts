import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../../core/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  Loading: any;
  loading$: any;
  constructor(private _SettingService: LoadingService) {
    this.loading$ = this._SettingService.isLoadingLoading$;
  }
  ngOnInit(): void {
    this._SettingService.isLoadingLoading$.subscribe((data:any)=>{
      this.Loading= data;

    })
  }


}
