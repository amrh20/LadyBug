import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";
import { SettingService } from "src/app/core/services/setting.service";
import { passwordMatchingValidatior } from "src/app/core/validators/confirm-validators";

@Component({
  selector: "app-create-pathogen-type",
  templateUrl: "./create-pathogen-type.component.html",
  styleUrls: ["./create-pathogen-type.component.scss"],
})
export class CreatePathogenTypeComponent implements OnInit {
  form = new FormGroup(
    {
      name_ar_localized: new FormControl("", [Validators.required]),
      name_en_localized: new FormControl("", [Validators.required]),
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
      if (params["id"]) {
        this.getUser(params["id"]);
        this.idEdit = params["id"];
      }
    });
  }
  getUser = (id: any) => {
    this.isEdit = true;

    this._CrudRequestsService
      .get("pathogen_types/" + id)
      .subscribe((data: any) => {
        this.form.patchValue({
          name_ar_localized: data.data.name.ar,
          name_en_localized: data.data.name.en,
        });
      });
  };

  sendData = () => {
    this.isSubmit = true;
    let data = {
      name: {
        ar: this.form.get("name_ar_localized")?.value,
        en: this.form.get("name_en_localized")?.value,
      },
    };
    if (this.form.valid) {
      this.loading = true;

      if (this.isEdit) {
        this._crud.put(`pathogen_types/${this.idEdit}`, data).subscribe(
          (res: any) => {
            this.loading = false;
            this.isSubmit = false;

            if (res.success) {
              this._setting.successHot(res.message);
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
      } else {
        this._crud.post(`pathogen_types`, data).subscribe(
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
    this.route.navigate(["/admin/pathogen-types"]);
  };
}
