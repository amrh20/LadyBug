import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";
import { SettingService } from "src/app/core/services/setting.service";
import { passwordMatchingValidatior } from "src/app/core/validators/confirm-validators";

@Component({
  selector: "app-post-blocked-create",
  templateUrl: "./post-blocked-create.component.html",
  styleUrls: ["./post-blocked-create.component.scss"],
})
export class PostBlockedCreateComponent implements OnInit {
  form = new FormGroup(
    {
      report_type_id: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
    },
    { validators: passwordMatchingValidatior }
  );
  loading: boolean = false;
  isSubmit: any = false;
  isEdit: any = false;
  idEdit: any;
  reportTypes: any;

  constructor(
    private _CrudRequestsService: CrudRequestsService,
    private _SettingService: SettingService,
    private _crud: CrudRequestsService,
    private _setting: SettingService,
    private route: Router,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._CrudRequestsService.get(`report_types`).subscribe((res: any) => {
      this.reportTypes = res.data.all;
    });

    this._activeRoute.params.subscribe((params) => {
      if (params["id"]) {
        this.getUser(params["id"]);
        this.idEdit = params["id"];
      }
    });
  }
  getUser = (id: any) => {
    this.isEdit = true;

    this._CrudRequestsService.get("reports/" + id).subscribe((data: any) => {
      console.log(data.data.report_type_id);
      this.form.patchValue({
        report_type_id: data.data.report_type_id,
        description: data.data.description,
      });
      console.log(
        "form",
        this.reportTypes,
        this.form.get("report_type_id")?.value
      );
    });
  };

  sendData = () => {
    this.isSubmit = true;
    let data = {
      post_id: this.idEdit,
      report_type_id: this.form.get("report_type_id")?.value,
      description: this.form.get("description")?.value,
    };
    if (this.form.valid) {
      this.loading = true;

      if (this.isEdit) {
        this._crud.put(`reports/${this.idEdit}`, data).subscribe(
          (res: any) => {
            this.loading = false;
            this.isSubmit = false;

            if (res.success) {
              this._setting.successHot(res.message);
            } else {
              this._setting.errorHot(res.message);
            }
            this.route.navigate(["/admin/posts/postBlocked"]);
          },
          (err: any) => {
            this.loading = false;
            this._setting.errorHot(err.message);
          },
          () => {}
        );
      } else {
        this._crud.post(`reports`, data).subscribe(
          (res: any) => {
            this.loading = false;
            this.isSubmit = false;

            if (res.success) {
              this._setting.successHot(res.message);
              this.form.reset();
              this.goBack();
            } else {
              this._setting.errorHot(res.message);
            }
            this.route.navigate(["/admin/posts/postBlocked"]);
          },
          (err: any) => {
            this.loading = false;
            this._setting.errorHot(err.message);
          },
          () => {}
        );
      }
    }
  };
  goBack = () => {
    this.route.navigate(["/admin/posts/postBlocked"]);
  };
}
