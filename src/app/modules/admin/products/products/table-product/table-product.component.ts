import { Component, OnInit } from "@angular/core";
import { SettingService } from "src/app/core/services/setting.service";
import { CrudRequestsService } from "../../../../../core/services/crud-requests.service";
import Swal from "sweetalert2";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-table-product",
  templateUrl: "./table-product.component.html",
  styleUrls: ["./table-product.component.scss"],
})
export class TableProductComponent implements OnInit {
  DataTable: any = [];
  filterForm = new FormGroup({
    name: new FormControl(""),
    description: new FormControl(""),
  });
  constructor(
    private _CrudRequestsService: CrudRequestsService,
    private _SettingService: SettingService
  ) {}
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers = () => {
    this._CrudRequestsService.get("products").subscribe((data: any) => {
      this.DataTable = data.data.data;
    });
  };

  search() {
    let name = this.filterForm.get("name")?.value;
    let description = this.filterForm.get("description")?.value;
    this._CrudRequestsService
      .get(`products?name=${name}&description=${description}`)
      .subscribe((data: any) => {
        this.DataTable = data.data.data;
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
        this._CrudRequestsService.delete("post_types/" + id).subscribe(
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
