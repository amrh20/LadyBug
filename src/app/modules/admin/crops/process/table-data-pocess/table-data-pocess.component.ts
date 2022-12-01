import { Component, OnInit } from '@angular/core';
import { CrudRequestsService } from '../../../../../core/services/crud-requests.service';
import { SettingService } from '../../../../../core/services/setting.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-data-pocess',
  templateUrl: './table-data-pocess.component.html',
  styleUrls: ['./table-data-pocess.component.scss']
})
export class TableDataPocessComponent implements OnInit {
 
  DataTable:any=[];
  constructor(
    private _CrudRequestsService: CrudRequestsService,
    private _SettingService: SettingService
  ) {}
  ngOnInit(): void {
    this.getUsers();
 
  }
  getUsers = () => {
    this._CrudRequestsService.get("farmed_type_stages").subscribe((data: any) => {
      this.DataTable = data.data.all;
    });
  };
  
  deleteItem = (id: any) => {
    Swal.fire({
      text: "   هل أنت متاكد من الحذف  ؟",
      allowOutsideClick: true,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: " تأكيد الحذف",
      confirmButtonAriaLabel: " تأكيد الحجر",
      cancelButtonText: "التراجع",
      cancelButtonAriaLabel: "التراجع",
    }).then((val: any) => {
      if (val.isConfirmed) {
        
        this._CrudRequestsService.delete("farmed_type_stages/"+id).subscribe( (res: any) => {
          this._SettingService.successHot(res.message);
          this.getUsers();
        },
        (err) => {
          this._SettingService.errorHot(err.message);
        });
      }
    });
  };

}
