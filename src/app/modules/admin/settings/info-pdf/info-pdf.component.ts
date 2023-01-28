import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";
import { SettingService } from "src/app/core/services/setting.service";
import { passwordMatchingValidatior } from "src/app/core/validators/confirm-validators";

@Component({
  selector: "app-info-pdf",
  templateUrl: "./info-pdf.component.html",
  styleUrls: ["./info-pdf.component.scss"],
})
export class InfoPdfComponent implements OnInit {
  form = new FormGroup(
    {
      name: new FormControl("info_pdf", [Validators.required]),
      asset: new FormControl("", [Validators.required]),
    },
    { validators: passwordMatchingValidatior }
  );
  loading: boolean = false;
  isSubmit: any = false;
  isEdit: any = false;
  idEdit: any;
  fileName: any;
  constructor(
    private _crud: CrudRequestsService,
    private _setting: SettingService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this._crud.get(`settings/info_pdf`).subscribe((res: any) => {
      this.form.patchValue({
        asset: res.data.value,
      });
      this.fileName = res.data.value;
    });
  }

  file: any = null;
  changeFile($event: any) {
    this.file = $event.target.files[0];
    this.form.patchValue({
      asset: this.file,
    });
  }

  sendData = () => {
    this.isSubmit = true;
    let data = new FormData();
    data.append("name", this.form.get("name")?.value);
    data.append("asset", this.file);
    if (this.form.valid) {
      this.loading = true;

      this._crud.post(`settings`, data).subscribe(
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
