import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { CrudRequestsService } from '../../../../../core/services/crud-requests.service';
import { SettingService } from '../../../../../core/services/setting.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-affecting-ac',
  templateUrl: './get-affecting-ac.component.html',
  styleUrls: ['./get-affecting-ac.component.scss']
})
export class GetAffectingAcComponent implements OnInit {
  filterForm = new FormGroup({
    name: new FormControl(""),
  });
  constructor(
    private _CrudRequestsService: CrudRequestsService,
    private _SettingService: SettingService,
    private _activeRoute:ActivatedRoute

  ) {}
  id:any;
  ac:any;
  ngOnInit(): void {
    this._activeRoute.params.subscribe((params) => {
      this.id=params['id'];
      this.ac=params['Ac'];
      this.getpathogens();
      
    });
  }
  DataTable: any = [];
  getpathogens = () => {
    this._CrudRequestsService
      .get("affecting_acs/"+this.id+'/'+this.ac )
      .subscribe((data: any) => {
        this.DataTable = data.data;
      });
  };


 
  search() {

  }
  current: any = 1;
  last: any = 0;
  pageChange($e: any) {
    this.current = $e;
    this.search();
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
        this._CrudRequestsService
          .delete(`delete_affecting_ac/${id}`)
          .subscribe((res: any) => {
            if (res.success) {
              this._SettingService.successHot("تم الحذف بنجاح");
              this.getpathogens();
            } else {
              this._SettingService.errorHot(res.message);
            }
          });
      }
    });
  };

}
