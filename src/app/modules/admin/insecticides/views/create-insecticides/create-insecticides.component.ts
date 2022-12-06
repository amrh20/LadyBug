import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CrudRequestsService } from '../../../../../core/services/crud-requests.service';
import { SettingService } from '../../../../../core/services/setting.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-insecticides',
  templateUrl: './create-insecticides.component.html',
  styleUrls: ['./create-insecticides.component.scss']
})
export class CreateInsecticidesComponent implements OnInit {
  form = new FormGroup(
    {
      name_ar: new FormControl("", [Validators.required]),
      name_en: new FormControl("", [Validators.required]),
      notes_ar: new FormControl("", [Validators.required]),
      notes_en: new FormControl("", [Validators.required]),
      precautions_en: new FormControl("", [Validators.required]),
      precautions_ar: new FormControl("", [Validators.required]),
      country_id: new FormControl("", [Validators.required]),
      dosage_form: new FormControl("", [Validators.required]),
      producer: new FormControl("", [Validators.required]),
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
    this.getCountries()
    this.acsGet()
    this.isEdit=false;

    this._activeRoute.params.subscribe((params) => {
      if (params["id"]) {
        this.getUser(params["id"]);
        this.idEdit = params["id"];
        this.isEdit=true;
      }
    });
  }
  getUser = (id: any) => {
    this.isEdit = true;
    this.ascData=false;
    this._CrudRequestsService.get("insecticides/" + id).subscribe((data: any) => {
      console.log(data.data)
      this.form.patchValue({
        name_ar: data.data.name,
        name_en: data.data.name.en,
        precautions_ar: data.data.precautions,
        precautions_en: data.data.precautions.en,
        notes_ar: data.data.notes,
        notes_en: data.data.notes.en,
        country_id: data.data.country.id,
        dosage_form:data.data.dosage_form,
        producer:data.data.producer,
      });
      let arr =[];
      for (var i = 0, len = data.data.acs.length; i < len; i++) {
        arr.push(data.data.acs[i].id)
      };
      this.selectedasc=arr;
      this.ascData=true;

    });
  };
  allCountries:any=[];
  getCountries = () => {
    this.isEdit = true;
    this._CrudRequestsService.get("countries" ).subscribe((data: any) => {
      this.allCountries=data.data.all;
    });
  };
  acsGet(){
    
    this._CrudRequestsService.get("acs" ).subscribe((data: any) => {
      this.asc=data.data.all;
    });
  }
  sendData = () => {
    this.isSubmit = true;
    let data = {
      name: {
        ar: this.form.get("name_ar")?.value,
        en: this.form.get("name_en")?.value,
      },
      precautions:{
        ar: this.form.get("precautions_ar")?.value,
        en: this.form.get("precautions_en")?.value,
      },
      notes:{
        ar: this.form.get("notes_ar")?.value,
        en: this.form.get("notes_en")?.value,
      },
      country_id:this.form.get("country_id")?.value,
    asc:this.selectedasc,
    dosage_form:this.form.get("dosage_form")?.value,
    producer:this.form.get("producer")?.value,
    };
    if (this.form.valid && this.selectedasc.length !=0) {
      this.loading = true;

      if (this.isEdit) {
        this._crud.put(`insecticides/${this.idEdit}`, data).subscribe(
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
        this._crud.post(`insecticides`, data).subscribe(
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
    this.route.navigate(["/admin/insecticides"]);
  };
  selectedasc:any=[];
  asc:any=[];
  ascData:any=true;
  onSelect(event: any) {
    this.selectedasc=event;

  }
}
