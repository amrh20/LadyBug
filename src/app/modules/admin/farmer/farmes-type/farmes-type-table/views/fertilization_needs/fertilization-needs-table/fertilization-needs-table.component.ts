import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";
import { SettingService } from "src/app/core/services/setting.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-fertilization-needs-table",
  templateUrl: "./fertilization-needs-table.component.html",
  styleUrls: ["./fertilization-needs-table.component.scss"],
})
export class FertilizationNeedsTableComponent implements OnInit {
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
          .delete("farmed_type_fertilization_needs/" + id)
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
  getUser = (id: any) => {
    this.success = false;
    this._CrudRequestsService
      .get("farmed_type_fertilization_needs/by_ft_id/" + id)
      .subscribe((data: any) => {
        this.res = data.data;
        console.log(this.res);
        this.success = data.data.code;
      });
  };
}
