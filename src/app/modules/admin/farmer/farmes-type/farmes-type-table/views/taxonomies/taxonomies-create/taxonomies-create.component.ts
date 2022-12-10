import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CrudRequestsService } from '../../../../../../../../core/services/crud-requests.service';
import { SettingService } from '../../../../../../../../core/services/setting.service';
import { Router, ActivatedRoute } from '@angular/router';
import {LocationStrategy} from '@angular/common';

@Component({
  selector: 'app-taxonomies-create',
  templateUrl: './taxonomies-create.component.html',
  styleUrls: ['./taxonomies-create.component.scss']
})
export class TaxonomiesCreateComponent implements OnInit {


 
  form = new FormGroup(
    {
      kingdom: new FormControl("", [Validators.required]),
      domain: new FormControl("", [Validators.required]),
      phylum: new FormControl("", [Validators.required]),
      subphylum: new FormControl("", [Validators.required]),
      superclass: new FormControl("", [Validators.required]),
      class: new FormControl("", [Validators.required]),
      order: new FormControl("", [Validators.required]),
      family: new FormControl("", [Validators.required]),
      genus: new FormControl("", [Validators.required]),
      species: new FormControl("", [Validators.required]),
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
    private LocationStrategy:LocationStrategy
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

    this._CrudRequestsService.get("taxonomies/" + id).subscribe((data: any) => {
      this.ids=data.data.farmed_type_id;
      this.form.patchValue({
  
        kingdom: data.data.kingdom,
        domain: data.data.domain,
        phylum: data.data.phylum,
        subphylum: data.data.subphylum,
        superclass: data.data.superclass,
        class: data.data.class,
        order: data.data.order,
        family: data.data.family,
        genus: data.data.genus,
        species: data.data.species,
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
        this._crud.post(`taxonomies`, data).subscribe(
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
       
        this._crud.post(`taxonomies`, data).subscribe(
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
    this.route.navigate([`/admin/farmer/farmedTypes/taxonomies/${this.ids}`]);
  };
  file:any=null;
  changeFile($event:any){
  this.file=$event.target.files[0];
  }

}
