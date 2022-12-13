import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";
import { SettingService } from "src/app/core/services/setting.service";

@Component({
  selector: "app-farmed-type-extras-create",
  templateUrl: "./farmed-type-extras-create.component.html",
  styleUrls: ["./farmed-type-extras-create.component.scss"],
})
export class FarmedTypeExtrasCreateComponent implements OnInit {
  form = new FormGroup({
    irrigation_rate_id: new FormControl("", [Validators.required]),
    seedling_type: new FormControl("", [Validators.required]),
    scientific_name: new FormControl("", [Validators.required]),
    history: new FormControl("", [Validators.required]),
    producer: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    cold_hours: new FormControl("", [Validators.required]),
    illumination_hours: new FormControl("", [Validators.required]),
    seeds_rate: new FormControl("", [Validators.required]),
    production_rate: new FormControl("", [Validators.required]),
  });
  loading: boolean = false;
  isSubmit: any = false;
  isEdit: any = false;
  idEdit: any;
  countries: any;
  irrigationRates: any;
  seedlingTypes: any;
  ids: any;

  constructor(
    private _CrudRequestsService: CrudRequestsService,
    private _crud: CrudRequestsService,
    private _setting: SettingService,
    private route: Router,
    private _activeRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    if (this.route.url.includes("edit")) {
      this.isEdit = true;
      this._activeRoute.params.subscribe((params) => {
        this.ids = params["id"];

        this.getUser(params["id"]);
      });
    } else {
      this._activeRoute.params.subscribe((params) => {
        if (params["id"]) {
          this.ids = params["id"];
        }
      });
    }

    this._CrudRequestsService
      .get(`farmed_type_extras/relations/index`)
      .subscribe((res: any) => {
        this.irrigationRates = res.data.irrigation_rates;
        this.seedlingTypes = res.data.seedling_types;
      });
  }
  farmed_typesData: any = [];
  farmed_types = () => {
    this._CrudRequestsService.get("farmed_types").subscribe((data: any) => {
      this.farmed_typesData = data.data.all;
    });
  };
  getUser = (id: any) => {
    this.isEdit = true;

    this._CrudRequestsService
      .get("farmed_type_extras/" + id)
      .subscribe((data: any) => {
        this.ids = data.data.farmed_type_id;
        this.form.patchValue({
          irrigation_rate_id: data.data.irrigation_rate.id,
          seedling_type: data.data.seedling_type.value,
          scientific_name: data.data.scientific_name,
          history: data.data.history,
          producer: data.data.producer,
          description: data.data.description,
          cold_hours: data.data.cold_hours,
          illumination_hours: data.data.illumination_hours,
          seeds_rate: data.data.seeds_rate,
          production_rate: data.data.production_rate,
        });
      });
  };
  DataTable: any = [];

  sendData = () => {
    console.log(this.ids);
    this.isSubmit = true;
    let data = {
      farmed_type_id: Number(this.ids),
      ...this.form.value,
    };
    console.log(data);
    if (this.form.valid) {
      this.loading = true;
      if (this.isEdit) {
        this._crud.post(`farmed_type_extras`, data).subscribe(
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
        this._crud.post(`farmed_type_extras`, data).subscribe(
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
      `/admin/farmer/farmedTypes/farmed_type_extras/${this.ids}`,
    ]);
  };
  file: any = null;
  changeFile($event: any) {
    this.file = $event.target.files[0];
  }
}
