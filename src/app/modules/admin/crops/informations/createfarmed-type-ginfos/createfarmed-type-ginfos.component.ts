import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { CrudRequestsService } from "../../../../../core/services/crud-requests.service";
import { SettingService } from "../../../../../core/services/setting.service";

@Component({
  selector: "app-createfarmed-type-ginfos",
  templateUrl: "./createfarmed-type-ginfos.component.html",
  styleUrls: ["./createfarmed-type-ginfos.component.scss"],
})
export class CreatefarmedTypeGinfosComponent implements OnInit {
  form = new FormGroup({
    title_ar: new FormControl("", [Validators.required]),
    title_en: new FormControl("", [Validators.required]),
    content_ar: new FormControl("", [Validators.required]),
    content_en: new FormControl("", [Validators.required]),
    farmed_type_stage_id: new FormControl("", [Validators.required]),
    farmed_type_id: new FormControl("", [Validators.required]),
  });
  loading: boolean = false;
  isSubmit: any = false;
  isEdit: any = false;
  idEdit: any;
  file: any = [];

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
    this.getFarmed();
    this.farmed_types();
  }
  assets: any;
  getUser = (id: any) => {
    this.isEdit = true;

    this._CrudRequestsService
      .get("farmed_type_ginfos/" + id)
      .subscribe((data: any) => {
        this.form.patchValue({
          title_ar: data.data.title.ar,
          title_en: data.data.title.en,
          content_ar: data.data.content.ar,
          content_en: data.data.content.en,
          farmed_type_stage_id: data.data.farmed_type_stage_id,
          farmed_type_id: data.data.farmed_type_id,
        });
        this.assets = data.data.assets;
      });
  };
  DataTable: any = [];
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
    let data = new FormData();
    data.append("title[ar]", this.form.value.title_ar);
    data.append("title[en]", this.form.value.title_en);
    data.append("content[ar]", this.form.value.content_ar);
    data.append("content[en]", this.form.value.content_ar);
    data.append("farmed_type_stage_id", this.form.value.farmed_type_stage_id);
    data.append("farmed_type_id", this.form.value.farmed_type_id);
    for (var i = 0, len = this.file.length; i < len; i++) {
      data.append(`assets[${i}]`, this.file[i]);
    }
    if (this.file) {
    }
    if (this.form.valid) {
      if (this.isEdit) {
        this.loading = true;

        this._crud.post(`farmed_type_ginfos/${this.idEdit}`, data).subscribe(
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
        if (this.file != null) {
          this.loading = true;

          this._crud.post(`farmed_type_ginfos`, data).subscribe(
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
    this.route.navigate(["/admin/farmed-blog/farmed-type-ginfos"]);
  };
}
