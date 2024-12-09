import { Component, OnInit } from "@angular/core";
import { CrudRequestsService } from "../../../../../core/services/crud-requests.service";
import { SettingService } from "../../../../../core/services/setting.service";
import Swal from "sweetalert2";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-table-zone",
  templateUrl: "./table-zone.component.html",
  styleUrls: ["./table-zone.component.scss"],
})
export class TableZoneComponent implements OnInit {
  DataTable: any = [];
  current: any = 1;
  last: any = 0;
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
      .get("districts" + `?page=${ this.current }&perPage=10`)
      .subscribe((data: any) => {
        this.DataTable = data.data.all;
        this.last = data.data.meta.pagesCount;
      });
  };

  search() {
    let name = this.filterForm.get("name")?.value;
    this._CrudRequestsService
      .get(`districts?name=${ name }&page=${ this.current }&perPage=10`)
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
      .get(`districts?page=${ this.current }&perPage=10`)
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
        this._CrudRequestsService.delete("districts/" + id).subscribe(
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

  pageChange($e: any) {
    this.current = $e;
    this.search();
  }
}
