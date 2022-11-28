import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";
import { SettingService } from "src/app/core/services/setting.service";
import { passwordMatchingValidatior } from "src/app/core/validators/confirm-validators";

@Component({
  selector: "app-create-permission",
  templateUrl: "./create-permission.component.html",
  styleUrls: ["./create-permission.component.scss"],
})
export class CreatePermissionComponent implements OnInit {
  form = new FormGroup(
    {
      name: new FormControl("", [Validators.required]),
      display_name: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
    },
    { validators: passwordMatchingValidatior }
  );
  loading: boolean = false;
  isSubmit: any = false;
  isEdit: any = false;
  idEdit: any;
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
      this.idEdit = params["id"];
    });
  }
  getUser = (id: any) => {
    this.isEdit = true;

    this._CrudRequestsService
      .get("permissions/" + id)
      .subscribe((data: any) => {
        this.form.patchValue({
          name: data.data.name,
          display_name: data.data.display_name,
          description: data.data.description,
        });
      });
  };

  sendData = () => {
    this.isSubmit = true;

    if (this.form.valid) {
      this.loading = true;
      if (this.isEdit) {
        this._crud.put(`permissions/${this.idEdit}`, this.form.value).subscribe(
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
        this._crud.post(`permissions`, this.form.value).subscribe(
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
    this.route.navigate(["/admin/permissions"]);
  };
}
