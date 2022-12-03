import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
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
  reportTypes: any;
  expression: boolean = false;

  reportForm = new FormGroup({
    report_type_id: new FormControl(),
    description: new FormControl(),
  });
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

    this._CrudRequestsService.get("report_types").subscribe((res: any) => {
      this.reportTypes = res.data.all;
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

  report() {
    let data = {
      description: this.reportForm.get("description")?.value,
      post_id: Number(this.id),
      report_type_id: Number(this.reportForm.get("report_type_id")?.value),
    };
    this._CrudRequestsService.post(`reports`, data).subscribe((res: any) => {
      if (res.success) {
        this._SettingService.successHot(res.message);
        this.reportForm.reset();
        this.router.navigate(["/admin/posts/posts"]);
      } else {
        this._SettingService.errorHot(res.message);
      }
    });
  }

  togglePopup() {
    this.expression = !this.expression;
  }
}
