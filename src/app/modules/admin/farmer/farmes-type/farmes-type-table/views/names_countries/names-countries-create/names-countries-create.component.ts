import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { CrudRequestsService } from '../../../../../../../../core/services/crud-requests.service';
import { SettingService } from 'src/app/core/services/setting.service';

@Component({
  selector: 'app-names-countries-create',
  templateUrl: './names-countries-create.component.html',
  styleUrls: ['./names-countries-create.component.scss']
})
export class NamesCountriesCreateComponent implements OnInit {
 
  form = new FormGroup({});
  
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
    private _activeRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {

    this.form = this.fb.group({
      countries: this.fb.array([
       
      ]),
    });
  }
  countries(): FormArray {
    return this.form.get("countries") as FormArray
  }
  newCountries(val:any='',sec:any=''): FormGroup {
    return this.fb.group({
      countries: new FormControl(val, [Validators.required]),
      name: new FormControl(sec, [Validators.required]),
    })
  }
  addCountries(val:any='',sec:any='') {
    this.countries().push(this.newCountries(val,sec));
  }
  removeQuantity(i: number) {
    this.countries().removeAt(i);
  }
  ids:any;
  ngOnInit(): void {
    this.getCountries()

      this._activeRoute.params.subscribe((params) => {
        if (params["id"]) {
          this.ids=params["id"];
          this.getUser(params["id"]) 
        
        }
      });
  }
  getCountries = () => {
    this._CrudRequestsService.get("countries" ).subscribe((data: any) => {
      this.allCountries=data.data.all
    });
  };
  ascData:any=[];
  selectedCountries:any=[];
  allCountries:any=[];
  onSelectCountries($e:any){
    this.selectedCountries=$e;
  }
  getUser = (id: any) => {
    this.ascData=false;
    this._CrudRequestsService.get("names_countries/" + id).subscribe((data: any) => {
      console.log(data.data)
       for (var i = 0, len = data.data.length; i < len; i++) {
        this.addCountries(data.data[i].id,data.data[i].common_name)
       };
       if(data.data.length ==0){
        this.addCountries()
       }
    });
  };
  DataTable:any=[];

 
  sendData = () => {
    this.isSubmit = true;
    let arr =[];
    for (var i = 0, len = this.form.value.countries.length; i < len; i++) {
      arr.push({
        id: Number(this.form.value.countries[i].countries),
name: this.form.value.countries[i].name
      })
    };
     let data ={
      farmed_type_id:this.ids,
      countries:arr
     }
    if (this.form.valid) {
      this.loading = true;
      if (this.isEdit) {
        this._crud.post(`names_countries`, data).subscribe(
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
       
        this._crud.post(`names_countries`, data).subscribe(
          (res: any) => {
            this.loading = false;
            this.isSubmit = false;

            if (res.success) {
              this._setting.successHot(res.message);
              this.form.reset();
              this.goBack();
              this.file=null;
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
    this.route.navigate([`/admin/farmer/farmedTypes/names_countries/${this.ids}`]);
  };
  file:any=null;
  changeFile($event:any){
  this.file=$event.target.files[0];
  }
 
}
