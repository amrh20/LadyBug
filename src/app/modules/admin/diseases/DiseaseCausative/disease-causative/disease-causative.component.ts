import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { CrudRequestsService } from 'src/app/core/services/crud-requests.service';
import { SettingService } from '../../../../../core/services/setting.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-disease-causative',
  templateUrl: './disease-causative.component.html',
  styleUrls: ['./disease-causative.component.scss']
})
export class DiseaseCausativeComponent implements OnInit {

  DataTable: any;
  id: any;
  filterForm = new FormGroup({
    name: new FormControl(""),
  });
  constructor(
    private activeRoute: ActivatedRoute,
    private _crudService: CrudRequestsService,
    private _SettingService: SettingService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((res: any) => {
      this.id = res.id;
    });
    this.getpathogensStages();
  }
  getpathogensStages() {
    this._crudService
      .get(`disease_causatives/by_disease_id/${this.id}`)
      .subscribe((res: any) => {
      if(JSON.stringify(res.data) === '{}'){
        this.DataTable = 0;
      }else{
        this.DataTable = res.data;

      }
      
      });
  }
  current: any = 1;
  last: any = 0;
  pageChange($e: any) {
    this.current = $e;
  }
  deleteItem = (id: any) => {
    Swal.fire({
      text: "   هل أنت متاكد من الحذف  ؟",
      allowOutsideClick: true,
      // iconHtml:"<img src='../../../../assets/images/delete-alert.svg'/>",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "تأكيد",
      confirmButtonAriaLabel: "تأكيد",
      cancelButtonText: "التراجع",
      cancelButtonAriaLabel: "التراجع",
    }).then((val: any) => {
      if (val.isConfirmed) {
        this._crudService
          .delete(`disease_causatives/${id}`)
          .subscribe((res: any) => {
            if (res.success) {
              this._SettingService.successHot("تم الحذف بنجاح");
              this.getpathogensStages();
            } else {
              this._SettingService.errorHot(res.message);
            }
          });
      }
    });
  };
}
