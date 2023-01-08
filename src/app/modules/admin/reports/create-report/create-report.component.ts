import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";
import { SettingService } from "src/app/core/services/setting.service";

@Component({
  selector: "app-create-report",
  templateUrl: "./create-report.component.html",
  styleUrls: ["./create-report.component.scss"],
})
export class CreateReportComponent implements OnInit {
  id: any;
  form = new FormGroup({
    description: new FormControl(null),
    report_type_id: new FormControl(null),
    post_id: new FormControl(null),
  });
  loading: boolean = false;
  isSubmit: any = false;
  isEdit: any = false;
  idEdit: any;
  constructor(
    private _CrudRequestsService: CrudRequestsService,
    private _crud: CrudRequestsService,
    private _setting: SettingService,
    private route: Router,
    private _activeRoute: ActivatedRoute
  ) {}

  posts: any;
  report_typesData: any = [];

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params) => {
      this.id = params["id"];
      if (params["id"]) {
        this.idEdit = params["id"];
        this._CrudRequestsService
          .get(`reports/${this.idEdit}`)
          .subscribe((res: any) => {
            this.form.patchValue({
              description: res.data.description,
              post_id: res.data.post.id,
              report_type_id: res.data.report_type_id,
            });
          });
      }
    });

    this._CrudRequestsService.get("report_types").subscribe((data: any) => {
      this.report_typesData = data.data.all;
    });

    this._CrudRequestsService.get("admin_posts").subscribe((data: any) => {
      this.posts = data.data.all;
    });
  }

  sendData = () => {
    this.isSubmit = true;
    let data = new FormData();
    data.append("description", this.form.value.description);
    data.append("report_type_id", this.form.value.report_type_id);
    data.append("post_id", this.form.value.post_id);
    if (this.file) {
      data.append("assets[0]", this.file);
    }

    if (this.isEdit) {
      this.loading = true;
      this._crud.put(`reports/${this.idEdit}`, data).subscribe(
        (res: any) => {
          this.loading = false;
          this.isSubmit = false;

          if (res.success) {
            this._setting.successHot(res.message);
          } else {
            this._setting.errorHot(res.message);
          }
        },
        (err: any) => {
          this.loading = false;
          this._setting.errorHot(err.message);
        },
        () => {}
      );
    } else {
      this.loading = true;

      this._crud.post(`reports`, data).subscribe(
        (res: any) => {
          this.loading = false;
          this.isSubmit = false;

          if (res.success) {
            this._setting.successHot(res.message);
            this.form.reset();
            this.goBack();
            this.file = null;
          } else {
            this._setting.errorHot(res.message);
          }
        },
        (err: any) => {
          this.loading = false;
          this._setting.errorHot(err.message);
        },
        () => {}
      );
    }
  };
  goBack = () => {
    this.route.navigate(["/admin/reports"]);
  };
  file: any = null;
  changeFile($event: any) {
    this.file = $event.target.files[0];
  }
}
