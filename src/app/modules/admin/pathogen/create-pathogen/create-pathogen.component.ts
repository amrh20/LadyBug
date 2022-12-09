import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";
import { SettingService } from "src/app/core/services/setting.service";
import { passwordMatchingValidatior } from "src/app/core/validators/confirm-validators";

@Component({
  selector: "app-create-pathogen",
  templateUrl: "./create-pathogen.component.html",
  styleUrls: ["./create-pathogen.component.scss"],
})
export class CreatePathogenComponent implements OnInit {
  relations: any;
  form = new FormGroup(
    {
      name_ar_localized: new FormControl("", [Validators.required]),
      name_en_localized: new FormControl("", [Validators.required]),
      pathogen_type_id: new FormControl(""),
      bio_control: new FormControl(""),
      ch_control: new FormControl(""),
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
    this._CrudRequestsService.get(`pathogen_types`).subscribe((res: any) => {
      this.relations = res.data.all;
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

    this._CrudRequestsService.get("pathogens/" + id).subscribe((data: any) => {
      this.form.patchValue({
        name_ar_localized: data.data.name.ar,
        name_en_localized: data.data.name.en,
        pathogen_type_id: data.data.pathogen_type.id,
        bio_control: data.data.bio_control,
        ch_control: data.data.ch_control,
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
      pathogen_type_id: Number(this.form.get("pathogen_type_id")?.value),
      bio_control: this.form.get("bio_control")?.value,
      ch_control: this.form.get("ch_control")?.value,
    };
    if (this.form.valid) {
      this.loading = true;

      if (this.isEdit) {
        this._crud.put(`pathogens/${this.idEdit}`, data).subscribe(
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
        this._crud.post(`pathogens`, data).subscribe(
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
    this.route.navigate(["/admin/pathogen"]);
  };
}
