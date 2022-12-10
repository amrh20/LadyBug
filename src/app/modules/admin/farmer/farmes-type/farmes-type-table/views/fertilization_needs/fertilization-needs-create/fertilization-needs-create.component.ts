import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";
import { SettingService } from "src/app/core/services/setting.service";

@Component({
  selector: "app-fertilization-needs-create",
  templateUrl: "./fertilization-needs-create.component.html",
  styleUrls: ["./fertilization-needs-create.component.scss"],
})
export class FertilizationNeedsCreateComponent implements OnInit {
  form = new FormGroup({
    farmed_type_stage_id: new FormControl(null, [Validators.required]),
    nut_elem_valuen: new FormControl(null, [Validators.required]),
    nut_elem_valuep: new FormControl("", [Validators.required]),
    nut_elem_valuek: new FormControl("", [Validators.required]),
    nut_elem_valuefe: new FormControl("", [Validators.required]),
    nut_elem_valueb: new FormControl("", [Validators.required]),
    nut_elem_valueca: new FormControl("", [Validators.required]),
    nut_elem_valuemg: new FormControl("", [Validators.required]),
    nut_elem_values: new FormControl("", [Validators.required]),
    nut_elem_valuezn: new FormControl("", [Validators.required]),
    nut_elem_valuemn: new FormControl("", [Validators.required]),
    nut_elem_valuecu: new FormControl("", [Validators.required]),
    nut_elem_valuecl: new FormControl("", [Validators.required]),
    nut_elem_valuemo: new FormControl("", [Validators.required]),
  });
  loading: boolean = false;
  isSubmit: any = false;
  isEdit: any = false;
  idEdit: any;
  fertilizationneeds: any;
  constructor(
    private _CrudRequestsService: CrudRequestsService,
    private _SettingService: SettingService,
    private _crud: CrudRequestsService,
    private _setting: SettingService,
    private route: Router,
    private _activeRoute: ActivatedRoute
  ) {}
  ids: any;
  ngOnInit(): void {
    if (this.route.url.includes("edit")) {
      this.isEdit = true;
      this._activeRoute.params.subscribe((params) => {
        if (params["id"]) {
          this.getUser(params["id"]);
        }
      });
    } else {
      this._activeRoute.params.subscribe((params) => {
        if (params["id"]) {
          this.ids = params["id"];
        }
      });
    }
    this._CrudRequestsService
      .get(`farmed_type_fertilization_needs/relations/index`)
      .subscribe((res: any) => {
        this.fertilizationneeds = res.data.farmed_type_stages;
      });
  }
  getUser = (id: any) => {
    this.isEdit = true;

    this._CrudRequestsService
      .get("farmed_type_fertilization_needs/" + id)
      .subscribe((data: any) => {
        this.ids = data.data.farmed_type_id;
        this.form.patchValue({
          farmed_type_stage_id: data.data.farmed_type_stage.id,
          nut_elem_valuen: data.data.nut_elem_value.n,
          nut_elem_valuep: data.data.nut_elem_value.p,
          nut_elem_valuek: data.data.nut_elem_value.k,
          nut_elem_valuefe: data.data.nut_elem_value.fe,
          nut_elem_valueb: data.data.nut_elem_value.b,
          nut_elem_valueca: data.data.nut_elem_value.ca,
          nut_elem_valuemg: data.data.nut_elem_value.mg,
          nut_elem_values: data.data.nut_elem_value.s,
          nut_elem_valuezn: data.data.nut_elem_value.zn,
          nut_elem_valuemn: data.data.nut_elem_value.mn,
          nut_elem_valuecu: data.data.nut_elem_value.cu,
          nut_elem_valuecl: data.data.nut_elem_value.cl,
          nut_elem_valuemo: data.data.nut_elem_value.mo,
        });
      });
  };
  DataTable: any = [];
  sendData = () => {
    this.isSubmit = true;

    let data = new FormData();
    data.append("farmed_type_id", this.ids);
    data.append(
      "farmed_type_stage_id",
      this.form.get("farmed_type_stage_id")?.value
    );
    data.append("nut_elem_value[n]", this.form.get("nut_elem_valuen")?.value);
    data.append("nut_elem_value[p]", this.form.get("nut_elem_valuep")?.value);
    data.append("nut_elem_value[k]", this.form.get("nut_elem_valuek")?.value);
    data.append("nut_elem_value[fe]", this.form.get("nut_elem_valuefe")?.value);
    data.append("nut_elem_value[b]", this.form.get("nut_elem_valueb")?.value);
    data.append("nut_elem_value[ca]", this.form.get("nut_elem_valueca")?.value);
    data.append("nut_elem_value[mg]", this.form.get("nut_elem_valuemg")?.value);
    data.append("nut_elem_value[s]", this.form.get("nut_elem_values")?.value);
    data.append("nut_elem_value[zn]", this.form.get("nut_elem_valuezn")?.value);
    data.append("nut_elem_value[mn]", this.form.get("nut_elem_valuemn")?.value);
    data.append("nut_elem_value[cu]", this.form.get("nut_elem_valuecu")?.value);
    data.append("nut_elem_value[cl]", this.form.get("nut_elem_valuecl")?.value);
    data.append("nut_elem_value[mo]", this.form.get("nut_elem_valuemo")?.value);

    if (this.form.valid) {
      this.loading = true;
      if (this.isEdit) {
        this._crud.post(`farmed_type_fertilization_needs`, data).subscribe(
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
        this._crud.post(`farmed_type_fertilization_needs`, data).subscribe(
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
  };
  goBack = () => {
    this.route.navigate([
      `/admin/farmer/farmedTypes/fertilization-needs/${this.ids}`,
    ]);
  };
  file: any = null;
  changeFile($event: any) {
    this.file = $event.target.files[0];
  }
}
