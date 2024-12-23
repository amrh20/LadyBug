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
  constructor (
    private _CrudRequestsService: CrudRequestsService,
    private _SettingService: SettingService
  ) { }
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers = () => {
    this._CrudRequestsService
      .get("admin/products" + `?page=${ this.current }&perPage=10`)
      .subscribe((data: any) => {
        this.DataTable = data.data.data;
        this.last = data.data.meta.pagesCount;
      });
  };

  search() {
    let name = this.filterForm.get("name")?.value;
    let description = this.filterForm.get("description")?.value;
    this._CrudRequestsService
      .get(
        `admin/products?name=${ name }&description=${ description }&page=${ this.current }&perPage=10`
      )
      .subscribe((data: any) => {
        this.DataTable = data.data.data;
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
        `admin/products?name=${ name }&page=${ this.current }&perPage=10`
      )
      .subscribe((data: any) => {
        this.DataTable = data.data.data;
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
        this._CrudRequestsService.delete("admin/products/" + id).subscribe(
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
  isShow: any = false;
  productName: any = "";
  productId: any = "";
  productRate: any = "";
  isHide(e: any) {
    this.isShow = false;
  }
  openRate(item: any) {
    this.isShow = true;
    this.productName = item.name.ar;
    this.productId = item.id;
    this.productRate = item.rating;
  }
  reGet($e: any) {
    this.getUsers();
  }
  current: any = 1;
  last: any = 0;
  pageChange($e: any) {
    this.current = $e;
    this.search();
  }
}
