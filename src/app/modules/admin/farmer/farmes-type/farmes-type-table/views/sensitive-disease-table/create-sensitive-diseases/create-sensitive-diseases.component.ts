import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";
import { SettingService } from "src/app/core/services/setting.service";

@Component({
  selector: "app-create-sensitive-diseases",
  templateUrl: "./create-sensitive-diseases.component.html",
  styleUrls: ["./create-sensitive-diseases.component.scss"],
})
export class CreateSensitiveDiseasesComponent implements OnInit {
  loading: boolean = false;
  isSubmit: any = false;
  isEdit: any = false;
  idEdit: any;
  diseases: any;
  assets: any;
  form = new FormGroup({
    farmed_type_stage_id: new FormControl(""),
    disease_id: new FormControl(""),
  });
  constructor(
    private _CrudRequestsService: CrudRequestsService,
    private _crud: CrudRequestsService,
    private _setting: SettingService,
    private route: Router,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.acsGet();
    this.isEdit = false;
    this.getFarmed();
    this._activeRoute.params.subscribe((params) => {
      this.idEdit = params["id"];
    });

    if (this.route.url.includes("create-Sensitive-diseases")) {
      this.isEdit = false;
      console.log("ddd");
    } else {
      this.isEdit = true;
      this._CrudRequestsService
        .get(`one_sensitive_disease/${this.idEdit}`)
        .subscribe((res: any) => {
          this.assets = res.data.assets;
          this.form.patchValue({
            farmed_type_stage_id: res.data.farmed_type_stage.id,
            disease_id: res.data.disease.id,
          });
        });
    }
  }

  DataTable: any = [];
  getFarmed = () => {
    this._CrudRequestsService
      .get("farmed_type_stages")
      .subscribe((data: any) => {
        this.DataTable = data.data.all;
      });
  };

  file: any = [];
  changeFile($event: any) {
    for (let i = 0; i < $event.target.files.length; i++) {
      this.file.push($event.target.files[i]);
    }
  }

  acsGet() {
    this._CrudRequestsService.get("diseases").subscribe((data: any) => {
      this.diseases = data.data.all;
    });
  }

  min: any = new Date();
  selectedasc: any = [];
  asc: any = [];
  ascData: any = true;
  onSelect(event: any) {
    this.selectedasc = event;
  }

  sendData = () => {
    this.isSubmit = true;
    console.log(this.form.value);
    if (this.form.valid) {
      let data = new FormData();
      data.append(
        "farmed_type_stage_id",
        this.form?.value?.farmed_type_stage_id
      );
      data.append("disease_id", this.form?.value?.disease_id);
      data.append("farmed_type_id", this.idEdit);

      for (var i = 0, len = this.file.length; i < len; i++) {
        data.append(`assets[${i}]`, this.file[i]);
      }
      if (this.isEdit) {
        this.loading = true;

        this._crud
          .post(`update_sensitive_disease/${this.idEdit}`, data)
          .subscribe(
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
      } else {
        if (this.file != null) {
          console.log("eddddddd");
          this.loading = true;
          this._crud.post(`create_sensitive_disease`, data).subscribe(
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
      }
    }
  };
  goBack = () => {
    this.route.navigate([
      "/admin/farmer/farmedTypes/Sensitive-diseases/",
      this.idEdit,
    ]);
  };
}
