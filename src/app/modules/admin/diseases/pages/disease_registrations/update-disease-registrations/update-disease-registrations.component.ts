import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CrudRequestsService } from '../../../../../../core/services/crud-requests.service';
import { SettingService } from '../../../../../../core/services/setting.service';

@Component({
  selector: 'app-update-disease-registrations',
  templateUrl: './update-disease-registrations.component.html',
  styleUrls: ['./update-disease-registrations.component.scss']
})
export class UpdateDiseaseRegistrationsComponent implements OnInit {

  form = new FormGroup({
    status: new FormControl("", [Validators.required]),
    disease_id: new FormControl("", [Validators.required]),
    expected_name: new FormControl("", [Validators.required]),
    discovery_date: new FormControl("", [Validators.required]),
    infection_rate_id:new FormControl("", [Validators.required]),
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
    this.relations();
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
    this._CrudRequestsService.get("admin/disease_registrations/" + id).subscribe((data: any) => {
      this.form.patchValue({
        status: data.data.status,
        disease_id: data.data.disease.id,
        expected_name: data.data.expected_name,
        discovery_date: data.data.discovery_date,
        infection_rate_id:data.data.infection_rate.id
      });
   
    });
  };
  CountriesData: any = [];
  selectedCountries: any = [];
  onSelectCountries($e: any) {
    this.selectedCountries = $e;
  }
  allCountries: any = [];
  relations = () => {
    this.isEdit = true;
    this._CrudRequestsService.get("disease_registrations/relations/index").subscribe((data: any) => {
      this.infection_rates=data.data.infection_rates;
      this.diseases=data.data.diseases;
        console.log(data.data)
    });
  };
  diseases:any=[];
  infection_rates:any=[];
  

  sendData = () => {
    this.isSubmit = true;
    let data = {
      ...this.form.value
    };
    if (
      this.form.valid
    ) {
      this.loading = true;

      if (this.isEdit) {
        this._crud.put(`admin/disease_registrations/${this.idEdit}`, data).subscribe(
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
      
      }
    }
  };
  goBack = () => {
    this.route.navigate(["/admin/Diseases/diseaseRegistrations"]);
  };
  selectedasc: any = [];
  asc: any = [];
  ascData: any = true;
  onSelect(event: any) {
    this.selectedasc = event;
  }
}
