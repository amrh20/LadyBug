import { Component, OnInit } from "@angular/core";
import { CrudRequestsService } from "../../../../../../../../core/services/crud-requests.service";
import { SettingService } from "../../../../../../../../core/services/setting.service";
import { Router, ActivatedRoute } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-taxonomies-table",
  templateUrl: "./taxonomies-table.component.html",
  styleUrls: ["./taxonomies-table.component.scss"],
})
export class TaxonomiesTableComponent implements OnInit {
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
        this._CrudRequestsService.delete("taxonomies/" + id).subscribe(
          (res: any) => {
            this._SettingService.successHot(res.message);
            this.getUser(this.ids);
          },
          (err) => {
            this._SettingService.errorHot(err.message);
          }
        );
      }
    });
  };
  ids: any = 1;

  DataTable: any = [];
  constructor(
    private _CrudRequestsService: CrudRequestsService,
    private _SettingService: SettingService,

    private _activeRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this._activeRoute.params.subscribe((params) => {
      this.getUser(params["id"]);
      this.ids = params["id"];
    });
  }
  success: any;
  detailsData: any;
  res: any;
  checkobj: any;
  getUser = (id: any) => {
    this.success = false;
    this._CrudRequestsService
      .get("taxonomies/by_ft_id/" + id)
      .subscribe((data: any) => {
        this.res = data.data;
        this.checkobj = Object.keys(this.res).length;
        this.success = data.data.code;
      });
  };
}
