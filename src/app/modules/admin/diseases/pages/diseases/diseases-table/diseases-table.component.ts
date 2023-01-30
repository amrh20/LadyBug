import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { FormGroup, FormControl } from "@angular/forms";
import { CrudRequestsService } from "../../../../../../core/services/crud-requests.service";
import { SettingService } from "../../../../../../core/services/setting.service";

@Component({
  selector: "app-diseases-table",
  templateUrl: "./diseases-table.component.html",
  styleUrls: ["./diseases-table.component.scss"],
})
export class DiseasesTableComponent implements OnInit {
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
      .get("admin/diseases" + `?page=${this.current}&perPage=10`)
      .subscribe((data: any) => {
        this.DataTable = data.data.all;
        this.last = data.data.meta.pagesCount;
      });
  };

  search() {
    let name = this.filterForm.get("name")?.value;
    this._CrudRequestsService
      .get(`admin/diseases?name=${name}&page=${this.current}&perPage=10`)
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
        this._CrudRequestsService.delete(`diseases/${id}`).subscribe(
          (res: any) => {
            if (res.success) {
              this._SettingService.successHot(res.message);
              this.getUsers();
            } else {
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
