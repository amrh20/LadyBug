import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";
import { SettingService } from "src/app/core/services/setting.service";
import { passwordMatchingValidatior } from "src/app/core/validators/confirm-validators";

@Component({
  selector: "app-add-price",
  templateUrl: "./add-price.component.html",
  styleUrls: ["./add-price.component.scss"],
})
export class AddPriceComponent implements OnInit {
  form = new FormGroup(
    {
      name: new FormControl("report_price", [Validators.required]),
      value: new FormControl("", [Validators.required]),
    },
    { validators: passwordMatchingValidatior }
  );
  loading: boolean = false;
  isSubmit: any = false;
  isEdit: any = false;
  idEdit: any;
  constructor(
    private _crud: CrudRequestsService,
    private _setting: SettingService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this._crud.get(`settings/report_price`).subscribe((res: any) => {
      this.form.patchValue({
        value: res.data.value,
      });
    });
  }

  sendData = () => {
    this.isSubmit = true;

    if (this.form.valid) {
      this.loading = true;

      this._crud.post(`settings`, this.form.value).subscribe(
        (res: any) => {
          this.loading = false;
          this.isSubmit = false;

          if (res.success) {
            this._setting.successHot(res.message);
            this.route.navigate(["/admin/settings"]);
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
    this.route.navigate(["/admin/settings"]);
  };
}
