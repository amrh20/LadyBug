import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { FormGroup, FormControl } from "@angular/forms";
import { CrudRequestsService } from "../../../../../../core/services/crud-requests.service";
import { SettingService } from "../../../../../../core/services/setting.service";

@Component({
  selector: "app-disease-registrations-table",
  templateUrl: "./disease-registrations-table.component.html",
  styleUrls: ["./disease-registrations-table.component.scss"],
})
export class DiseaseRegistrationsTableComponent implements OnInit {
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
      .get("admin/disease_registrations" + `?page=${ this.current }&perPage=10`)
      .subscribe((data: any) => {
        this.DataTable = data.data.all;
        this.last = data.data.meta.pagesCount;
      });
  };

  search() {
    let name = this.filterForm.get("name")?.value;

    this._CrudRequestsService
      .get(
        `admin/disease_registrations?name=${ name }&page=${ this.current }&perPage=10`
      )
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
        `admin/disease_registrations?page=${ this.current }&perPage=10`
      )
      .subscribe((data: any) => {
        this.DataTable = data.data.all;
        this.last = data.data.meta.pagesCount;
      });
  }
  toogle(id: any, event: any) {
    this._CrudRequestsService
      .get(`admin/disease_registrations/toggle_confirm/${ id }`)
      .subscribe((data: any) => {
        this._SettingService.successHot(data.message);
      });
  }
  current: any = 1;
  last: any = 0;
  pageChange($e: any) {
    this.current = $e;
    this.search();
  }
}
