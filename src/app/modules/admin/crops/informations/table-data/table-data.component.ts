import { Component, OnInit } from '@angular/core';
import { CrudRequestsService } from '../../../../../core/services/crud-requests.service';
import { SettingService } from '../../../../../core/services/setting.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {

   
  DataTable:any=[];
  constructor(
    private _CrudRequestsService: CrudRequestsService,
    private _SettingService: SettingService
  ) {}
  ngOnInit(): void {
    this.getUsers();
 
  }
  getUsers = () => {
    this._CrudRequestsService.get("farmed_type_ginfos"+`?page=${this.current}&perPage=10`).subscribe((data: any) => {
      this.DataTable = data.data.all;
      this.last= data.data.meta.pagesCount;
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
        
        this._CrudRequestsService.delete("farmed_type_ginfos/"+id).subscribe( (res: any) => {
          this._SettingService.successHot(res.message);
          this.getUsers();
        },
        (err) => {
          this._SettingService.errorHot(err.message);
        });
      }
    });
  };
  current:any=1;
  last:any=0;
  pageChange($e:any){
    this.current=$e;
    this.getUsers()
  }
}
