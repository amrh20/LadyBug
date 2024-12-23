import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";
import { SettingService } from "src/app/core/services/setting.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-all-acs",
  templateUrl: "./all-acs.component.html",
  styleUrls: ["./all-acs.component.scss"],
})
export class AllAcsComponent implements OnInit {
  filterForm = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    mobile: new FormControl(""),
  });
  constructor (
    private _CrudRequestsService: CrudRequestsService,
    private _SettingService: SettingService
  ) { }
  ngOnInit(): void {
    this.getacs();
  }
  DataTable: any = [];
  getacs = () => {
    this._CrudRequestsService
      .get("admin/acs" + `?page=${ this.current }&perPage=10`)
      .subscribe((data: any) => {
        this.DataTable = data.data.all;
        this.last = data.data.meta.pagesCount;
      });
  };

  hasValue(): boolean {
    return Object.values(this.filterForm.controls).some(control => control.value);
  }
  reset() {
    this.filterForm.reset()
    this._CrudRequestsService
      .get("admin/acs" + `?page=${ this.current }&perPage=10`)

      .subscribe((data: any) => {
        this.DataTable = data.data.all;
        this.last = data.data.meta.pagesCount;
      });
  }

  blockItem = (id: any, $event: any) => {
    this._CrudRequestsService.get(`admin/acs/toggle_activate/${ id }`).subscribe(
      (data: any) => {
        if (data.success) {
          this._SettingService.successHot(data.message);
        } else {
          this._SettingService.errorHot(data.message);
        }
      },
      (err: any) => {
        this._SettingService.errorHot(err.message);
      }
    );
  };

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
          .delete(`admin/acs/${ id }`)
          .subscribe((res: any) => {
            this._SettingService.successHot("تم الحذف بنجاح");
            this.getacs();
          });
      }
    });
  };

  search() {
    let name = this.filterForm.get("name")?.value;
    console.log(name);
    let email = this.filterForm.get("email")?.value;
    let mobile = this.filterForm.get("mobile")?.value;
    this._CrudRequestsService
      .get(
        `acs?name=${ name }&email=${ email }&mobile=${ mobile }&page=${ this.current }&perPage=10`
      )
      .subscribe((data: any) => {
        this.DataTable = data.data.all;
        this.last = data.data.meta.pagesCount;
      });
  }
  current: any = 1;
  last: any = 0;
  pageChange($e: any) {
    this.current = $e;
    this.search();
  }
}
