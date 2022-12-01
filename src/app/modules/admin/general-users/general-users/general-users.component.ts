import { Component, OnInit } from "@angular/core";
import { CrudRequestsService } from "../../../../core/services/crud-requests.service";
import { SettingService } from "../../../../core/services/setting.service";
import Swal from "sweetalert2";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-general-users",
  templateUrl: "./general-users.component.html",
  styleUrls: ["./general-users.component.scss"],
})
export class GeneralUsersComponent implements OnInit {
  filterForm = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    mobile: new FormControl(""),
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
      .get("users" + `?page=${this.current}&perPage=10`)
      .subscribe((data: any) => {
        this.DataTable = data.data.all;
        this.last = data.data.meta.pagesCount;
      });
  };

  blockItem = (id: any, $event: any) => {
    this._CrudRequestsService.get(`users/toggle_activate/${id}`).subscribe(
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
      confirmButtonText: " تأكيد الحذف",
      confirmButtonAriaLabel: " تأكيد الحذف",
      cancelButtonText: "التراجع",
      cancelButtonAriaLabel: "التراجع",
    }).then((val: any) => {
      if (val.isConfirmed) {
      }
    });
  };

  search() {
    let name = this.filterForm.get("name")?.value;
    console.log(name);
    let email = this.filterForm.get("email")?.value;
    let mobile = this.filterForm.get("mobile")?.value;
    this._CrudRequestsService
      .get(`users?name=${name}&email=${email}&mobile=${mobile}`)
      .subscribe((data: any) => {
        this.DataTable = data.data.all;
      });
  }
  current: any = 1;
  last: any = 0;
  pageChange($e: any) {
    this.current = $e;
    this.getUsers();
  }
}
