import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CrudRequestsService } from '../../../../../../../../core/services/crud-requests.service';
import { SettingService } from '../../../../../../../../core/services/setting.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-countries-create',
  templateUrl: './countries-create.component.html',
  styleUrls: ['./countries-create.component.scss']
})
export class CountriesCreateComponent implements OnInit {



 
  form = new FormGroup(
    {
     
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
    private _activeRoute: ActivatedRoute,
  ) {}
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
      this.allCountries=data.data.all.map(function(o:any) {
        return {id:o.id,name:o.name.ar};
    });
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
    this._CrudRequestsService.get("popular_countries/" + id).subscribe((data: any) => {
      this.selectedCountries=[];
      for (var i = 0, len = data.data.length; i < len; i++) {
        this.selectedCountries.push(data.data[i].id)
      };
      this.ascData=true;

    });
  };
  DataTable:any=[];

 
  sendData = () => {
    this.isSubmit = true;
     let data ={
      farmed_type_id:this.ids,
      countries:this.selectedCountries
     }
    if (this.selectedCountries.length !=0) {
      this.loading = true;
      if (this.isEdit) {
        this._crud.post(`popular_countries`, data).subscribe(
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
       
        this._crud.post(`popular_countries`, data).subscribe(
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
    this.route.navigate([`/admin/farmer/farmedTypes/CountriesFaremd/${this.ids}`]);
  };
  file:any=null;
  changeFile($event:any){
  this.file=$event.target.files[0];
  }

}
