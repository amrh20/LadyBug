import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CrudRequestsService } from '../../../../../../core/services/crud-requests.service';
import { SettingService } from '../../../../../../core/services/setting.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-infection-rates-create',
  templateUrl: './infection-rates-create.component.html',
  styleUrls: ['./infection-rates-create.component.scss']
})
export class InfectionRatesCreateComponent implements OnInit {


  form = new FormGroup(
    {
      name_ar: new FormControl("", [Validators.required]),
      name_en: new FormControl("", [Validators.required]),
    }
  );
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

    this.isEdit=false;

    this._activeRoute.params.subscribe((params) => {
      if (params["id"]) {
        this.getUser(params["id"]);
        this.idEdit = params["id"];
        this.isEdit=true;
      }
    });
  }
  show:any=true;
  getUser = (id: any) => {
    this.isEdit = true;
    this.ascData=false;
    this.show=false;
    this._CrudRequestsService.get("infection_rates/" + id).subscribe((data: any) => {

      this.form.patchValue({
        name_ar: data.data.name.ar,
        name_en: data.data.name.en,
   
      });

    });
  };
  allCountries:any=[];


  min:any=new Date();
  sendData = () => {
    this.isSubmit = true;
    let data = {
      name: {
        ar: this.form.get("name_ar")?.value,
        en: this.form.get("name_en")?.value,
      },
    };
    if (this.form.valid ) {
      this.loading = true;

      if (this.isEdit) {
        this._crud.put(`infection_rates/${this.idEdit}`, data).subscribe(
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
        this._crud.post(`infection_rates`, data).subscribe(
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
    this.route.navigate(["/admin/Diseases/InfectionRates"]);
  };
  selectedasc:any=[];
  asc:any=[];
  ascData:any=true;
  onSelect(event: any) {
    this.selectedasc=event;

  }
}
