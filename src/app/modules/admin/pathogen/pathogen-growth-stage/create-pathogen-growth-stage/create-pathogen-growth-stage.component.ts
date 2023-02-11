import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { CrudRequestsService } from "src/app/core/services/crud-requests.service";
import { SettingService } from "src/app/core/services/setting.service";

@Component({
  selector: "app-create-pathogen-growth-stage",
  templateUrl: "./create-pathogen-growth-stage.component.html",
  styleUrls: ["./create-pathogen-growth-stage.component.scss"],
})
export class CreatePathogenGrowthStageComponent implements OnInit {
  id: any;
  form = new FormGroup({
    name_ar: new FormControl("", [Validators.required]),
    name_en: new FormControl("", [Validators.required]),
  });
  loading: boolean = false;
  isSubmit: any = false;
  isEdit: any = false;
  idEdit: any;
  file: any = [];
  DataTable: any = [];

  constructor(
    private _CrudRequestsService: CrudRequestsService,
    private _crud: CrudRequestsService,
    private _setting: SettingService,
    private route: Router,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params) => {
      this.id = params["id"];
      if (params["id"]) {
        this.idEdit = params["id"];
      }
    });
    this.getFarmed();
    this.farmed_types();

    if (this.route.url.includes("edit-pathogen-growth-stage")) {
      this.isEdit = true;
      this.getUser(this.id);
    } else {
      this.isEdit = false;
    }
  }
  assets: any;
  pathogenId: any;
  getUser = (id: any) => {
    this._CrudRequestsService
      .get("pathogen_growth_stages/" + id)
      .subscribe((data: any) => {
        this.form.patchValue({
          name_ar: data.data?.name?.ar,
          name_en: data.data?.name?.en,
        });
        this.assets = data.data.assets;
        this.pathogenId = data.data.pathogen_id;
      });
  };
  getFarmed = () => {
    this._CrudRequestsService
      .get("farmed_type_stages")
      .subscribe((data: any) => {
        this.DataTable = data.data.all;
      });
  };
  farmed_typesData: any = [];
  farmed_types = () => {
    this._CrudRequestsService.get("farmed_types").subscribe((data: any) => {
      this.farmed_typesData = data.data.all;
    });
  };

  changeFile($event: any) {
    for (let i = 0; i < $event.target.files.length; i++) {
      this.file.push($event.target.files[i]);
    }
  }
  sendData = () => {
    this.isSubmit = true;

    if (this.form.valid) {
      if (this.isEdit) {
        this.loading = true;
        let data = new FormData();
        data.append("name[ar]", this.form?.value?.name_ar);
        data.append("name[en]", this.form?.value?.name_en);
        data.append("pathogen_id", this.pathogenId);

        for (var i = 0, len = this.file.length; i < len; i++) {
          data.append(`assets[${i}]`, this.file[i]);
        }
        this._crud.put(`pathogen_growth_stages/${this.id}`, data).subscribe(
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
        let data = new FormData();
        data.append("name[ar]", this.form?.value?.name_ar);
        data.append("name[en]", this.form?.value?.name_en);
        data.append("pathogen_id", this.id);

        for (var i = 0, len = this.file.length; i < len; i++) {
          data.append(`assets[${i}]`, this.file[i]);
        }
        if (this.file != null) {
          console.log("eddddddd");
          this.loading = true;
          this._crud.post(`pathogen_growth_stages`, data).subscribe(
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
      "admin/pathogen-growth-stage/pathogen-growth-stage/" + this.id,
    ]);
  };
}
