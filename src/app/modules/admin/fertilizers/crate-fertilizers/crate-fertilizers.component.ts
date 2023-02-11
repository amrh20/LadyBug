import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { CrudRequestsService } from "../../../../core/services/crud-requests.service";
import { SettingService } from "../../../../core/services/setting.service";

@Component({
  selector: "app-crate-fertilizers",
  templateUrl: "./crate-fertilizers.component.html",
  styleUrls: ["./crate-fertilizers.component.scss"],
})
export class CrateFertilizersComponent implements OnInit {
  form = new FormGroup({
    name: new FormGroup({
      ar: new FormControl("", [Validators.required]),
      en: new FormControl("", [Validators.required]),
    }),
    dosage_form: new FormControl("", [Validators.required]),
    producer: new FormControl("", [Validators.required]),
    country_id: new FormControl("", [Validators.required]),
    addition_way: new FormControl("", [Validators.required]),
    conc: new FormControl("", [Validators.required]),
    reg_date: new FormControl("", []),
    reg_num: new FormControl("", []),
    mix_ph: new FormControl("", [Validators.required]),
    usage_rate: new FormControl("", []),
    expiry: new FormControl("", []),
    precautions: new FormGroup({
      ar: new FormControl("", [Validators.required]),
      en: new FormControl("", [Validators.required]),
    }),
    notes: new FormGroup({
      ar: new FormControl("", [Validators.required]),
      en: new FormControl("", [Validators.required]),
    }),
    nut_elem_value: new FormGroup({
      n: new FormControl("", [Validators.required]),
      p: new FormControl("", [Validators.required]),
      k: new FormControl("", [Validators.required]),
      fe: new FormControl("", [Validators.required]),
      b: new FormControl("", [Validators.required]),
      ca: new FormControl("", [Validators.required]),
      s: new FormControl("", [Validators.required]),
      mg: new FormControl("", [Validators.required]),
      zn: new FormControl("", [Validators.required]),
      mn: new FormControl("", [Validators.required]),
      cu: new FormControl("", [Validators.required]),
      cl: new FormControl("", [Validators.required]),
      mo: new FormControl("", [Validators.required]),
    }),
  });

  obj: any = {
    'b': { name: "بورون", value: 0 },
    'ca': { name: "كالسيوم", value: 0 },
    'cl': { name: "كلور", value: 0 },
    'cu': { name: "نحاس", value: 0 },
    'fe': { name: "حديد", value: 0 },
    'k': { name: "بوتاسيوم", value: 0 },
    'mg': { name: "ماغنيسيوم", value: 0 },
    'mn': { name: "منجنيز", value: 0 },
    'mo': { name: "مولبيدنم", value: 0 },
    'n': { name: "نيتروجين", value: 0 },
    'p': { name: "فوسفور", value: 0 },
    's': { name: "كبريت", value: 0 },
    'zn': { name: "زنك", value: 0 },
  };
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
  ) { }
  countries: any;
  dosage_forms: any;
  ngOnInit(): void {
    this._activeRoute.params.subscribe((params) => {
      if (params["id"]) {
        this.getUser(params["id"]);
        this.idEdit = params["id"];
      }
    });
    this._CrudRequestsService
      .get(`fertilizers/relations/index`)
      .subscribe((res: any) => {
        this.countries = res.data.countries;
        this.dosage_forms = res.data.dosage_forms;
      });
  }
  getUser = (id: any) => {
    this.isEdit = true;

    this._CrudRequestsService
      .get("admin/fertilizers/" + id)
      .subscribe((data: any) => {
        let newObject: any = {};
        let nut_elem_value = Object.keys(data.data.nut_elem_value).forEach(function (key) {
          var value = data.data.nut_elem_value[key].value;
          newObject[key] = value;
        });
        this.form.patchValue({
          ...data.data,
          country_id: data.data.country.id,
          nut_elem_value: newObject
        });
      });
  };

  sendData = () => {
    this.isSubmit = true;
    let data = {
      ...this.form.value
    };
    if (this.form.valid) {
      this.loading = true;

      if (this.isEdit) {
        this._crud.put(`fertilizers/${this.idEdit}`, data).subscribe(
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
          () => { }
        );
      } else {
        this._crud.post(`fertilizers`, data).subscribe(
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
          () => { }
        );
      }
    }
  };
  goBack = () => {
    this.route.navigate(["/admin/Fertilizers/indexFertilizers"]);
  };
  objectMap(object: any, mapFn: any) {
    return Object.keys(object).reduce(function (result: any, key: any) {
      result[key] = mapFn(object[key])
      return result
    }, {})
  }
}
