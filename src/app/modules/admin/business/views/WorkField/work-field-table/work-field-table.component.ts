import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CrudRequestsService } from '../../../../../../core/services/crud-requests.service';
import { SettingService } from '../../../../../../core/services/setting.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-work-field-table',
  templateUrl: './work-field-table.component.html',
  styleUrls: ['./work-field-table.component.scss']
})
export class WorkFieldTableComponent implements OnInit {

  DataTable: any = [];
  filterForm = new FormGroup({
    name: new FormControl(""),
  });
  constructor (
    private _CrudRequestsService: CrudRequestsService,
    private _SettingService: SettingService
  ) { }
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers = () => {
    this._CrudRequestsService
      .get("work_fields" + `?page=${ this.current }&perPage=10`)
      .subscribe((data: any) => {
        this.DataTable = data.data.all;
        this.last = data.data.meta.pagesCount;
      });
  };

  search() {
    let name = this.filterForm.get("name")?.value;

    this._CrudRequestsService
      .get(`work_fields?name=${ name }&page=${ this.current }&perPage=10`)
      .subscribe((data: any) => {
        this.DataTable = data.data.all;
        this.last = data.data.meta.pagesCount;
      });
  }

  hasValue(): boolean {
    return Object.values(this.filterForm.controls).some(control => control.value);
  }
  reset() {
    this.filterForm.reset()
    this._CrudRequestsService
      .get(
        `work_fields??page=${ this.current }&perPage=10`
      )
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
        this._CrudRequestsService.delete("work_fields/" + id).subscribe(
          (res: any) => {
            this._SettingService.successHot(res.message);
            this.getUsers();
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
