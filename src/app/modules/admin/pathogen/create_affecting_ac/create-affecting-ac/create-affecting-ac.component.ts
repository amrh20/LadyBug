import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CrudRequestsService } from '../../../../../core/services/crud-requests.service';
import { SettingService } from '../../../../../core/services/setting.service';

@Component({
  selector: 'app-create-affecting-ac',
  templateUrl: './create-affecting-ac.component.html',
  styleUrls: ['./create-affecting-ac.component.scss']
})
export class CreateAffectingAcComponent implements OnInit {

  form = new FormGroup({
    effect_ar: new FormControl("", [Validators.required]),
    effect_en: new FormControl("", [Validators.required]),
    ac_id: new FormControl("", [Validators.required])
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
  allCountries:any=[];
  id:any;
  ac:any;
  pathogen_growth_stage_id:any;
  ngOnInit(): void {
    this.isEdit = false;

    this._activeRoute.params.subscribe((params) => {
      if (params["id"]) {
        this.idEdit = params["id"];
        this.id=params['id'];
        this.ac=params['Ac'];
        this.pathogen_growth_stage_id=params['pathogen_growth_stage_id']
      }
    });
    if(this.route.url.includes('edit-affecting-ac')){
      this.isEdit = true;
      this.getUser( this.idEdit);

    }
    this._CrudRequestsService.get("admin/acs").subscribe((data: any) => {
      this.allCountries=data.data.all
      });
  }
  show: any = true;
  getUser = (id: any) => {
    this.isEdit = true;
    this.ascData = false;
    this.show = false;
    this._CrudRequestsService.get("one_affecting_ac/" + id).subscribe((data: any) => {
      this.form.patchValue({
        effect_ar: data.data.effect.ar,
        effect_en: data.data.effect.en,
        ac_id:data.data.ac.id
      });
      this.assets = data.data.assets;

      this.id=data.data.pathogen_growth_stage_id;
    });
  };

  CountriesData: any = [];
  selectedCountries: any = [];
  onSelectCountries($e: any) {
    this.selectedCountries = $e;
  }
  file:any=[];
  changeFile($event: any) {
    for (let i = 0; i < $event.target.files.length; i++) {
      this.file.push($event.target.files[i]);
    }
  }
  min: any = new Date();
  sendData = () => {
    this.isSubmit = true;
    let data=new FormData();
    data.append('ac_id',this.form.value.ac_id)
    data.append('effect[ar]',this.form.value.effect_ar)
    data.append('effect[en]',this.form.value.effect_en)
    data.append('pathogen_growth_stage_id',this.id)
    
    for (var i = 0, len = this.file.length; i < len; i++) {
      data.append(`assets[${i}]`, this.file[i]);
    }
    if (
      this.form.valid 
    ) {
      this.loading = true;

      if (this.isEdit) {
        this._crud.post(`update_affecting_ac/${this.idEdit}`, data).subscribe(
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
        this._crud.post(`create_affecting_ac`, data).subscribe(
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
    if(this.isEdit){
   
      
      this.route.navigate(["/admin/pathogen-growth-stage/get-affecting-ac",this.pathogen_growth_stage_id,this.id]);

    }else{
      this.route.navigate(["/admin/pathogen-growth-stage/get-affecting-ac",this.ac,this.id]);

    }
  };
  assets: any;

  selectedasc: any = [];
  asc: any = [];
  ascData: any = true;
  onSelect(event: any) {
    this.selectedasc = event;
  }
}
