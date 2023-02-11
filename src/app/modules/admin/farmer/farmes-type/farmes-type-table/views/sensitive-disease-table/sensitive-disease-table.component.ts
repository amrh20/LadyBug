import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";
import { SettingService } from "src/app/core/services/setting.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-sensitive-disease-table",
  templateUrl: "./sensitive-disease-table.component.html",
  styleUrls: ["./sensitive-disease-table.component.scss"],
})
export class SensitiveDiseaseTableComponent implements OnInit {
  ids: any = 1;

  DataTable: any = [];
  constructor(
    private _CrudRequestsService: CrudRequestsService,
    private _activeRoute: ActivatedRoute,
    private _SettingService: SettingService
  ) {}
  ngOnInit(): void {
    this._activeRoute.params.subscribe((params) => {
      this.getUser(params["id"]);
      this.ids = params["id"];
    });
  }
  success: any;
  detailsData: any;
  resistantDiseases: any;
  checkobj: any;

  getUser = (id: any) => {
    this.success = false;
    this._CrudRequestsService
      .get(`sensitive_diseases/${this.ids}/all`)
      .subscribe((data: any) => {
        this.resistantDiseases = data.data;
        this.success = data.data.code;
      });
  };

  deleteItem = (id: any) => {
    Swal.fire({
      text: "   هل أنت متاكد من الحذف  ؟",
      allowOutsideClick: true,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "تأكيد",
      confirmButtonAriaLabel: "تأكيد",
      cancelButtonText: "التراجع",
      cancelButtonAriaLabel: "التراجع",
    }).then((val: any) => {
      if (val.isConfirmed) {
        this._CrudRequestsService
          .delete(`delete_sensitive_disease/${id}`)
          .subscribe((res: any) => {
            this._SettingService.successHot("تم الحذف بنجاح");
            this.getUser(this.ids);
          });
      }
    });
  };
}
