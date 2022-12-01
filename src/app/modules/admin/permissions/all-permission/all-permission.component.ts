import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";
import { SettingService } from "src/app/core/services/setting.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-all-permission",
  templateUrl: "./all-permission.component.html",
  styleUrls: ["./all-permission.component.scss"],
})
export class AllPermissionComponent implements OnInit {
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
    this._CrudRequestsService.get("permissions").subscribe((data: any) => {
      this.DataTable = data.data.all;
    });
  };
  search() {
    let name = this.filterForm.get("name")?.value;
    console.log(name);
    this._CrudRequestsService
      .get(`permissions?name=${name}`)
      .subscribe((data: any) => {
        this.DataTable = data.data.all;
      });
  }
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
        this._CrudRequestsService.delete(`permissions/${id}`).subscribe(
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
}
