import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { CrudRequestsService } from "../../../../../core/services/crud-requests.service";
import { SettingService } from "../../../../../core/services/setting.service";

@Component({
  selector: "app-farmes-type-create",
  templateUrl: "./farmes-type-create.component.html",
  styleUrls: ["./farmes-type-create.component.scss"],
})
export class FarmesTypeCreateComponent implements OnInit {
  form = new FormGroup({
    name_ar_localized: new FormControl("", [Validators.required]),
    name_en_localized: new FormControl("", [Validators.required]),
    farm_activity_type_id: new FormControl("", [Validators.required]),
    parent_id: new FormControl(""),
    country_id: new FormControl("", [Validators.required]),
    suitable_soil_salts_concentrationF: new FormControl("", [
      Validators.required,
    ]),
    suitable_soil_salts_concentrationT: new FormControl("", [
      Validators.required,
    ]),
    suitable_water_salts_concentrationF: new FormControl("", [
      Validators.required,
    ]),
    suitable_water_salts_concentrationT: new FormControl("", [
      Validators.required,
    ]),
    suitable_phF: new FormControl("", [Validators.required]),
    suitable_phT: new FormControl("", [Validators.required]),
    suitable_soil_types: new FormControl(""),
    farming_temperatureF: new FormControl("", [Validators.required]),
    farming_temperatureT: new FormControl("", [Validators.required]),
    flowering_temperatureF: new FormControl("", [Validators.required]),
    flowering_temperatureT: new FormControl("", [Validators.required]),
    maturity_temperatureF: new FormControl("", [Validators.required]),
    maturity_temperatureT: new FormControl("", [Validators.required]),
    humidityF: new FormControl("", [Validators.required]),
    humidityT: new FormControl("", [Validators.required]),
    flowering_time: new FormControl("", [Validators.required]),
    maturity_time: new FormControl("", [Validators.required]),
    photo: new FormControl("", [Validators.required]),
  });
  loading: boolean = false;
  isSubmit: any = false;
  isEdit: any = false;
  selectedData: any = [];

  idEdit: any;
  countries: any;
  farmActivityTypes: any;
  parents: any;
  soilTypes: any;
  ascData: boolean = false;
  DataTable: any = [];
  suitableSoilTypes: any = [];

  constructor(
    private _CrudRequestsService: CrudRequestsService,
    private _crud: CrudRequestsService,
    private _setting: SettingService,
    private route: Router,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ascData = true;

    this._activeRoute.params.subscribe((params) => {
      if (params["id"]) {
        this.getUser(params["id"]);
        this.idEdit = params["id"];
      }
    });

    this._CrudRequestsService
      .get(`farmed_types/relations/index`)
      .subscribe((res: any) => {
        this.countries = res.data.countries;
        this.farmActivityTypes = res.data.farm_activity_types;
        this.parents = res.data.parents;
        this.soilTypes = res.data.soil_types;
      });
  }
  getUser = (id: any) => {
    this.isEdit = true;
    this.ascData = false;

    this._CrudRequestsService
      .get("farmed_types/" + id)
      .subscribe((data: any) => {
        let arrcountries: any = [];
        for (
          var i = 0, len = data.data.suitable_soil_types.length;
          i < len;
          i++
        ) {
          arrcountries.push(Number(data.data.suitable_soil_types[i]));
        }
        this.selectedData = arrcountries;
        this.ascData = true;

        this.form.patchValue({
          name_ar_localized: data.data.name.ar,
          name_en_localized: data.data.name.en,
          country_id: data.data.country_id,
          parent_id: data.data.parent_id,
          farm_activity_type_id: data.data.farm_activity_type_id,
          suitable_soil_salts_concentrationF:
            data.data.suitable_soil_salts_concentration[0],
          suitable_soil_salts_concentrationT:
            data.data.suitable_soil_salts_concentration[1],
          suitable_water_salts_concentrationF:
            data.data.suitable_water_salts_concentration[0],
          suitable_water_salts_concentrationT:
            data.data.suitable_water_salts_concentration[1],
          suitable_phF: data.data.suitable_ph[0],
          suitable_phT: data.data.suitable_ph[1],
          suitable_soil_types: new FormControl(""),
          farming_temperatureF: data.data.farming_temperature[0],
          farming_temperatureT: data.data.farming_temperature[1],
          flowering_temperatureF: data.data.flowering_temperature[0],
          flowering_temperatureT: data.data.flowering_temperature[1],
          maturity_temperatureF: data.data.maturity_temperature[0],
          maturity_temperatureT: data.data.maturity_temperature[1],
          humidityF: data.data.humidity[0],
          humidityT: data.data.humidity[1],
          flowering_time: data.data.flowering_time,
          maturity_time: data.data.maturity_time,
          photo: data.data.photo_url,
        });
      });
  };

  goBack = () => {
    this.route.navigate(["/admin/farmer/farmedTypes"]);
  };

  file: any = null;
  changeFile($event: any) {
    this.file = $event.target.files[0];
  }
  onSelectCountries($e: any) {
    this.selectedData = $e;
  }

  sendData = () => {
    this.isSubmit = true;
    let data = new FormData();
    data.append("name[ar]", this.form.get("name_ar_localized")?.value);
    data.append("name[en]", this.form.get("name_en_localized")?.value);
    data.append(
      "farm_activity_type_id",
      this.form.get("farm_activity_type_id")?.value
    );
    data.append("parent_id", this.form.get("parent_id")?.value);
    data.append("country_id", this.form.get("country_id")?.value);
    data.append(
      "suitable_soil_salts_concentration[]",
      this.form.get("suitable_soil_salts_concentrationF")?.value
    );
    data.append(
      "suitable_soil_salts_concentration[]",
      this.form.get("suitable_soil_salts_concentrationT")?.value
    );
    data.append(
      "suitable_water_salts_concentration[]",
      this.form.get("suitable_water_salts_concentrationF")?.value
    );
    data.append(
      "suitable_water_salts_concentration[]",
      this.form.get("suitable_water_salts_concentrationT")?.value
    );

    data.append("suitable_ph[]", this.form.get("suitable_phF")?.value);
    data.append("suitable_ph[]", this.form.get("suitable_phT")?.value);

    for (let i = 0; i < this.selectedData.length; i++) {
      data.append(`suitable_soil_types[${i}]`, this.selectedData[i]);
    }
    data.append(
      "farming_temperature[]",
      this.form.get("farming_temperatureF")?.value
    );
    data.append(
      "farming_temperature[]",
      this.form.get("farming_temperatureT")?.value
    );

    data.append(
      "flowering_temperature[]",
      this.form.get("flowering_temperatureF")?.value
    );
    data.append(
      "flowering_temperature[]",
      this.form.get("flowering_temperatureT")?.value
    );

    data.append(
      "maturity_temperature[]",
      this.form.get("maturity_temperatureF")?.value
    );
    data.append(
      "maturity_temperature[]",
      this.form.get("maturity_temperatureT")?.value
    );

    data.append("humidity[]", this.form.get("humidityF")?.value);
    data.append("humidity[]", this.form.get("humidityT")?.value);

    data.append("flowering_time", this.form.get("flowering_time")?.value);
    data.append("maturity_time", this.form.get("maturity_time")?.value);
    if (this.file) {
      data.append("photo", this.file);
    }
    this.loading = true;
    if (this.isEdit) {
      this._crud.put(`farmed_types/${this.idEdit}`, data).subscribe(
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
      this._crud.post(`farmed_types`, data).subscribe(
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
  };
}
