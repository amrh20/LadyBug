import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";
import { SettingService } from "src/app/core/services/setting.service";
import { passwordMatchingValidatior } from "src/app/core/validators/confirm-validators";

@Component({
  selector: "app-create-irrigation-rates",
  templateUrl: "./create-irrigation-rates.component.html",
  styleUrls: ["./create-irrigation-rates.component.scss"],
})
export class CreateIrrigationRatesComponent implements OnInit {
  loading: boolean = false;
  isSubmit: any = false;
  isEdit: any = false;
  idEdit: any;
  form = new FormGroup({
    ar: new FormControl("", [Validators.required]),
    en: new FormControl("", [Validators.required]),
  });

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
    if (this.idEdit) {
      this.isEdit = true;
    }
  }
  getUser = (id: any) => {
    this._CrudRequestsService
      .get("irrigation_rates/" + id)
      .subscribe((data: any) => {
        this.form.patchValue({
          ar: data.data.name.ar,
          en: data.data.name.en,
        });
      });
  };

  sendData = () => {
    this.isSubmit = true;

    let data = {
      name: { ar: this.form.get("ar")?.value, en: this.form.get("en")?.value },
    };
    if (this.form.valid) {
      this.loading = true;
      if (this.isEdit) {
        this._crud.put(`irrigation_rates/${this.idEdit}`, data).subscribe(
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
        this._crud.post(`irrigation_rates`, data).subscribe(
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
    this.route.navigate(["/admin/irrigation_rates"]);
  };
}
