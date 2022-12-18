import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
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
        this.getUser(params["id"]);
        this.idEdit = params["id"];
      }
    });
    this.getFarmed();
    this.farmed_types();
  }
  getUser = (id: any) => {
    this.isEdit = true;

    this._CrudRequestsService
      .get("pathogen_growth_stages/" + id)
      .subscribe((data: any) => {
        this.form.patchValue({
          name_ar: data.data.title.ar,
          name_en: data.data.title.en,
        });
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
  sendData = () => {
    this.isSubmit = true;
    let data = new FormData();
    data.append("name[ar]", this.form.value.name_ar);
    data.append("name[en]", this.form.value.name_en);
    data.append("pathogen_id", this.id);
    if (this.file) {
      data.append("assets[0]", this.file);
    }
    if (this.form.valid) {
      if (this.isEdit) {
        this.loading = true;

        this._crud
          .post(`pathogen_growth_stages/${this.idEdit}`, data)
          .subscribe(
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
        if (this.file != null) {
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
    this.route.navigate(["/admin/farmed-blog/farmed-type-ginfos"]);
  };
  file: any = null;
  changeFile($event: any) {
    this.file = $event.target.files[0];
  }
}
