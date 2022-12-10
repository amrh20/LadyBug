import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";
import { SettingService } from "src/app/core/services/setting.service";

@Component({
  selector: "app-marketing-datas-create",
  templateUrl: "./marketing-datas-create.component.html",
  styleUrls: ["./marketing-datas-create.component.scss"],
})
export class MarketingDatasCreateComponent implements OnInit {
  form = new FormGroup({
    country_id: new FormControl("", [Validators.required]),
    year: new FormControl("", [Validators.required]),
    production: new FormControl("", [Validators.required]),
    consumption: new FormControl("", [Validators.required]),
    export: new FormControl("", [Validators.required]),
    price_avg: new FormControl("", [Validators.required]),
  });
  loading: boolean = false;
  isSubmit: any = false;
  isEdit: any = false;
  idEdit: any;
  countries: any;
  constructor(
    private _CrudRequestsService: CrudRequestsService,
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

    this._CrudRequestsService.get(`countries`).subscribe((res: any) => {
      this.countries = res.data.all;
    });
  }
  getUser = (id: any) => {
    this.isEdit = true;

    this._CrudRequestsService
      .get("marketing_datas/" + id)
      .subscribe((data: any) => {
        this.ids = data.data.farmed_type_id;
        this.form.patchValue({
          country_id: data.data.country.id,
          year: data.data.year,
          production: data.data.production,
          consumption: data.data.consumption,
          export: data.data.export,
          price_avg: data.data.price_avg,
        });
      });
  };
  DataTable: any = [];

  sendData = () => {
    this.isSubmit = true;
    let data = {
      farmed_type_id: this.ids,
      ...this.form.value,
    };
    if (this.form.valid) {
      this.loading = true;
      if (this.isEdit) {
        this._crud.post(`marketing_datas`, data).subscribe(
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
        this._crud.post(`marketing_datas`, data).subscribe(
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
      `/admin/farmer/farmedTypes/marketing-datas/${this.ids}`,
    ]);
  };
  file: any = null;
  changeFile($event: any) {
    this.file = $event.target.files[0];
  }
}
