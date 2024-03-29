import { Component, OnInit } from "@angular/core";
import { CrudRequestsService } from "../../../../../../../../core/services/crud-requests.service";
import { SettingService } from "../../../../../../../../core/services/setting.service";
import { Router, ActivatedRoute } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-farmed-type-nut-vals-table",
  templateUrl: "./farmed-type-nut-vals-table.component.html",
  styleUrls: ["./farmed-type-nut-vals-table.component.scss"],
})
export class FarmedTypeNutValsTableComponent implements OnInit {
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
        this._CrudRequestsService
          .delete("farmed_type_nut_vals/" + id)
          .subscribe(
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
    private _crud: CrudRequestsService,
    private _setting: SettingService,
    private route: Router,
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
      .get("farmed_type_nut_vals/by_ft_id/" + id)
      .subscribe((data: any) => {
        this.res = data.data;
        this.success = data.data.code;
        this.checkobj = Object.keys(this.res).length;
      });
  };
}
