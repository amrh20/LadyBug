import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CrudRequestsService } from '../../../../../../core/services/crud-requests.service';
import { SettingService } from '../../../../../../core/services/setting.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-infection-rates-table',
  templateUrl: './infection-rates-table.component.html',
  styleUrls: ['./infection-rates-table.component.scss']
})
export class InfectionRatesTableComponent implements OnInit {

  filterForm = new FormGroup({
    name: new FormControl(""),
  });
  constructor(
    private _CrudRequestsService: CrudRequestsService,
    private _SettingService: SettingService
  ) {}
  ngOnInit(): void {
    this.getUsers();
  }
  DataTable: any = [];
  getUsers = () => {
    this._CrudRequestsService
      .get("infection_rates" + `?page=${this.current}&perPage=10`)
      .subscribe((data: any) => {
        this.DataTable = data.data.all;
        this.last = data.data.meta.pagesCount;
      });
  };

  search() {
    let name = this.filterForm.get("name")?.value;
    this._CrudRequestsService
      .get(`infection_rates?name=${name}&page=${this.current}&perPage=10`)
      .subscribe((data: any) => {
        this.DataTable = data.data.all;
        this.last = data.data.meta.pagesCount;
      });
  }
  deleteItem = (id: any) => {
    Swal.fire({
      text: "   هل أنت متاكد من الحذف  ؟",
      allowOutsideClick: true,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "تأكيد",
      confirmButtonAriaLabel: " تأكيد الحجر",
      cancelButtonText: "التراجع",
      cancelButtonAriaLabel: "التراجع",
    }).then((val: any) => {
      if (val.isConfirmed) {
        this._CrudRequestsService.delete(`infection_rates/${id}`).subscribe(
          (res: any) => {
            if(res.success){
              this._SettingService.successHot(res.message);
              this.getUsers();
            }else{
              this._SettingService.errorHot(res.message);
            }
          },
          (err) => {
            this._SettingService.errorHot(err.message);
          }
        );
      }
    });
  };
  current: any = 1;
  last: any = 0;
  pageChange($e: any) {
    this.current = $e;
    this.search();
  }
}
