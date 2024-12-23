import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

import { CrudRequestsService } from "../../../../../core/services/crud-requests.service";
import { SettingService } from "../../../../../core/services/setting.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-business-table",
  templateUrl: "./business-table.component.html",
  styleUrls: ["./business-table.component.scss"],
})
export class BusinessTableComponent implements OnInit {
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
    this._CrudRequestsService.get("admin/businesses").subscribe((data: any) => {
      this.DataTable = data.data.all;
      this.last = data.data.meta.pagesCount;
    });
  };

  search() {
    let name = this.filterForm.get("name")?.value;

    this._CrudRequestsService
      .get(`admin/businesses?name=${ name }&page=${ this.current }&perPage=10`)
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
        `admin/businesses?page=${ this.current }&perPage=10`
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
  isShow: any = false;
  productName: any = "";
  productId: any = "";
  productRate: any = "";
  isHide(e: any) {
    this.isShow = false;
  }
  openRate(item: any) {
    this.isShow = true;
    this.productName = item.com_name;
    this.productId = item.id;
    this.productRate = item.ladybug_rating;
    console.log(item);
  }
  reGet($e: any) {
    this.getUsers();
  }
}
