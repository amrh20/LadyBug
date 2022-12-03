import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";
import { SettingService } from "src/app/core/services/setting.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-post-details",
  templateUrl: "./post-details.component.html",
  styleUrls: ["./post-details.component.scss"],
})
export class PostDetailsComponent implements OnInit {
  detailsData: any = {};
  id: any;
  constructor(
    private _CrudRequestsService: CrudRequestsService,
    private _activeRoute: ActivatedRoute,
    private _SettingService: SettingService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this._activeRoute.params.subscribe((params) => {
      this.id = params["id"];
      this.getUser(params["id"]);
    });
  }

  getUser = (id: any) => {
    this._CrudRequestsService.get("posts/" + id).subscribe((data: any) => {
      this.detailsData = data.data;
    });
  };

  block() {
    Swal.fire({
      text: "   هل أنت متاكد من حظر هذا المنشور  ؟",
      allowOutsideClick: true,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "تأكيد",
      confirmButtonAriaLabel: " تأكيد ",
      cancelButtonText: "التراجع",
      cancelButtonAriaLabel: "التراجع",
    }).then((val: any) => {
      if (val.isConfirmed) {
        this._CrudRequestsService
          .get(`posts/toggle_activate/${this.id}`)
          .subscribe(
            (res: any) => {
              this._SettingService.successHot(res.message);
              this.router.navigate(["/admin/posts/posts"]);
            },
            (err) => {
              this._SettingService.errorHot(err.message);
            }
          );
      }
    });
  }
}
