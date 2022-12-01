import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import Swal from "sweetalert2";
import { CrudRequestsService } from "../../../../../core/services/crud-requests.service";
import { SettingService } from "../../../../../core/services/setting.service";

@Component({
  selector: "app-post-index",
  templateUrl: "./post-index.component.html",
  styleUrls: ["./post-index.component.scss"],
})
export class PostIndexComponent implements OnInit {
  DataTable: any = [];
  assetsUrl = environment.baseUrl;
  constructor(
    private _CrudRequestsService: CrudRequestsService,
    private _SettingService: SettingService
  ) {}
  ngOnInit(): void {
    this.getPosts();
  }
  getPosts = () => {
    this._CrudRequestsService.get("posts").subscribe((data: any) => {
      this.DataTable = data.data.all;
    });
  };

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
        this._CrudRequestsService.delete("posts/" + id).subscribe(
          (res: any) => {
            this._SettingService.successHot(res.message);
            this.getPosts();
          },
          (err) => {
            this._SettingService.errorHot(err.message);
          }
        );
      }
    });
  };
}
