import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { CrudRequestsService } from "../../../../../core/services/crud-requests.service";
import { SettingService } from "../../../../../core/services/setting.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-consultants-table",
  templateUrl: "./consultants-table.component.html",
  styleUrls: ["./consultants-table.component.scss"],
})
export class ConsultantsTableComponent implements OnInit {
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
    this.consultants();
  }
  DataTable: any = [];
  consultants = () => {
    this._CrudRequestsService
      .get("admin/consultants" + `?page=${this.current}&perPage=10`)
      .subscribe((data: any) => {
        this.DataTable = data.data.all;
        this.last = data.data.meta.pagesCount;
      });
  };

  search() {
    let name = this.filterForm.get("name")?.value;
    console.log(name);
    let email = this.filterForm.get("email")?.value;
    let mobile = this.filterForm.get("mobile")?.value;
    this._CrudRequestsService
      .get(`admin/consultants?name=${name}&page=${this.current}&perPage=10`)
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
  toogle(id: any, event: any) {
    this._CrudRequestsService
      .get(`admin/consultants/toggle_activate/${id}`)
      .subscribe((data: any) => {
        this._SettingService.successHot(data.message);
      });
  }
}
