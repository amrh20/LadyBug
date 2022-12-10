import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CrudRequestsService } from '../../../../../../../../core/services/crud-requests.service';
import { SettingService } from '../../../../../../../../core/services/setting.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-farmed-type-nut-vals-create',
  templateUrl: './farmed-type-nut-vals-create.component.html',
  styleUrls: ['./farmed-type-nut-vals-create.component.scss']
})
export class FarmedTypeNutValsCreateComponent implements OnInit {

  

 
  form = new FormGroup(
    {
      calories: new FormControl("", [Validators.required]),
      total_fat: new FormControl("", [Validators.required]),
      sat_fat: new FormControl("", [Validators.required]),
      cholesterol: new FormControl("", [Validators.required]),
      na: new FormControl("", [Validators.required]),
      k: new FormControl("", [Validators.required]),
      total_carb: new FormControl("", [Validators.required]),
      dietary_fiber: new FormControl("", [Validators.required]),
      sugar: new FormControl("", [Validators.required]),
      protein: new FormControl("", [Validators.required]),
      v_c: new FormControl("", [Validators.required]),
      fe: new FormControl("", [Validators.required]),
      v_b6: new FormControl("", [Validators.required]),
      mg: new FormControl("", [Validators.required]),
      ca: new FormControl("", [Validators.required]),
      v_d: new FormControl("", [Validators.required]),
      cobalamin: new FormControl("", [Validators.required]),
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
    if(this.route.url.includes('edit')){
      this.isEdit=true;
      this._activeRoute.params.subscribe((params) => {
        if (params["id"]) {
          this.getUser(params["id"]) 
        }
      });
    }else{
      this._activeRoute.params.subscribe((params) => {
        if (params["id"]) {
          this.ids=params["id"];
        }
      });
    }
  
  }
  getUser = (id: any) => {
    this.isEdit = true;

    this._CrudRequestsService.get("farmed_type_nut_vals/" + id).subscribe((data: any) => {
      this.ids=data.data.farmed_type_id;
      this.form.patchValue({
        calories: data.data.calories,
        total_fat: data.data.total_fat,
        sat_fat:data.data.sat_fat,
        cholesterol: data.data.cholesterol,
        na: data.data.na,
        k: data.data.k,
        total_carb: data.data.total_carb,
        dietary_fiber: data.data.dietary_fiber,
        sugar: data.data.sugar,
        protein: data.data.protein,
        v_c: data.data.v_c,
        fe: data.data.fe,
        v_b6: data.data.v_b6,
        mg:data.data.mg,
        ca: data.data.ca,
        v_d: data.data.v_d,
        cobalamin: data.data.cobalamin,

      });
    });
  };
  DataTable:any=[];

 
  sendData = () => {
    this.isSubmit = true;
     let data ={
      farmed_type_id:this.ids,
      ...this.form.value
     }
    if (this.form.valid) {
      this.loading = true;
      if (this.isEdit) {
        this._crud.post(`farmed_type_nut_vals`, data).subscribe(
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
       
        this._crud.post(`farmed_type_nut_vals`, data).subscribe(
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
    this.route.navigate([`/admin/farmer/farmedTypes/farmed_type_nut_vals/${this.ids}`]);
  };
  file:any=null;
  changeFile($event:any){
  this.file=$event.target.files[0];
  }

}
