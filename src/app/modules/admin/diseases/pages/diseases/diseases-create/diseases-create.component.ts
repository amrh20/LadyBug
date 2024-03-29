import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CrudRequestsService } from "../../../../../../core/services/crud-requests.service";
import { SettingService } from "../../../../../../core/services/setting.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-diseases-create",
  templateUrl: "./diseases-create.component.html",
  styleUrls: ["./diseases-create.component.scss"],
})
export class DiseasesCreateComponent implements OnInit {
  form = new FormGroup({
    name_ar: new FormControl("", [Validators.required]),
    name_en: new FormControl("", [Validators.required]),
    description_ar: new FormControl("", [Validators.required]),
    description_en: new FormControl("", [Validators.required]),
  });
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
    this.getCountries();
    this.acsGet();
    this.isEdit = false;

    this._activeRoute.params.subscribe((params) => {
      if (params["id"]) {
        this.getUser(params["id"]);
        this.idEdit = params["id"];
        this.isEdit = true;
      }
    });
  }
  show: any = true;
  getUser = (id: any) => {
    this.isEdit = true;
    this.ascData = false;
    this.show = false;
    this._CrudRequestsService.get("diseases/" + id).subscribe((data: any) => {
      this.form.patchValue({
        name_ar: data.data.name.ar,
        name_en: data.data.name.en,
        description_ar: data.data.description.ar,
        description_en: data.data.description.en,
      });
      let arr = [];
      for (var i = 0, len = data.data.pathogens.length; i < len; i++) {
        arr.push(data.data.acs[i].id);
      }
      this.selectedasc = arr;
      let arrcountries: any = [];
      for (var i = 0, len = data.data.countries.length; i < len; i++) {
        arr.push(data.data.acs[i].id);
      }
      this.selectedCountries = arrcountries;

      this.ascData = true;
      this.show = true;
      this.ascData = true;
    });
  };
  CountriesData: any = [];
  selectedCountries: any = [];
  onSelectCountries($e: any) {
    this.selectedCountries = $e;
  }
  allCountries: any = [];
  getCountries = () => {
    this.isEdit = true;
    this._CrudRequestsService.get("countries").subscribe((data: any) => {
      this.CountriesData = data.data.all.map(function (o: any) {
        return { id: o.id, name: o.name.ar };
      });
    });
  };
  acsGet() {
    this._CrudRequestsService.get("pathogens").subscribe((data: any) => {
      this.asc = data.data.all.map(function (o: any) {
        return { id: o.id, name: o.name.ar };
      });
    });
  }
  min: any = new Date();
  sendData = () => {
    this.isSubmit = true;
    let data = {
      name: {
        ar: this.form.get("name_ar")?.value,
        en: this.form.get("name_en")?.value,
      },
      description: {
        ar: this.form.get("description_ar")?.value,
        en: this.form.get("description_en")?.value,
      },
      countries: this.selectedCountries,
      pathogens: this.selectedasc,
    };
    if (
      this.form.valid &&
      this.selectedasc.length != 0 &&
      this.selectedCountries.length != 0
    ) {
      this.loading = true;

      if (this.isEdit) {
        this._crud.put(`diseases/${this.idEdit}`, data).subscribe(
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
        this._crud.post(`diseases`, data).subscribe(
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
    this.route.navigate(["/admin/Diseases/indexDiseases"]);
  };
  selectedasc: any = [];
  asc: any = [];
  ascData: any = true;
  onSelect(event: any) {
    this.selectedasc = event;
  }
}
