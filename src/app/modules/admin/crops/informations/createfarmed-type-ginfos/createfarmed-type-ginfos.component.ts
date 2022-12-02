import { Component, OnInit } from '@angular/core';
import { CrudRequestsService } from '../../../../../core/services/crud-requests.service';
import { SettingService } from '../../../../../core/services/setting.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createfarmed-type-ginfos',
  templateUrl: './createfarmed-type-ginfos.component.html',
  styleUrls: ['./createfarmed-type-ginfos.component.scss']
})
export class CreatefarmedTypeGinfosComponent implements OnInit {

 
  form = new FormGroup(
    {
      title_ar: new FormControl("", [Validators.required]),
      title_en: new FormControl("", [Validators.required]),
      content_ar: new FormControl("", [Validators.required]),
      content_en: new FormControl("", [Validators.required]),
      farmed_type_stage_id: new FormControl("", [Validators.required]),
      farmed_type_id: new FormControl("", [Validators.required]),
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
    this._activeRoute.params.subscribe((params) => {
      if (params["id"]) {
        this.getUser(params["id"]);
        this.idEdit = params["id"];
      }
    });
    this.getFarmed()
    this.farmed_types()
  }
  getUser = (id: any) => {
    this.isEdit = true;

    this._CrudRequestsService.get("farmed_type_ginfos/" + id).subscribe((data: any) => {
      this.form.patchValue({
        title_ar: data.data.title.ar,
        title_en: data.data.title.en,
        content_ar: data.data.content.ar,
        content_en: data.data.content.en,
        farmed_type_stage_id:data.data.farmed_type_stage_id,
        farmed_type_id: data.data.farmed_type_id,
      });
    });
  };
  DataTable:any=[];
  getFarmed = () => {
    this._CrudRequestsService.get("farmed_type_stages").subscribe((data: any) => {
      this.DataTable = data.data.all;
    });
  };
  farmed_typesData:any=[];
  farmed_types = () => {
    this._CrudRequestsService.get("farmed_types").subscribe((data: any) => {
      this.farmed_typesData = data.data.all;
    });
  };
  sendData = () => {
    this.isSubmit = true;
     let data = new FormData();
     data.append('title[ar]',this.form.value.title_ar)
     data.append('title[en]',this.form.value.title_en)
     data.append('content[ar]',this.form.value.content_ar)
     data.append('content[en]',this.form.value.content_ar)
     data.append('farmed_type_stage_id',this.form.value.farmed_type_stage_id)
     data.append('farmed_type_id',this.form.value.farmed_type_id)
     if(this.file){
      data.append('assets[0]',this.file)

     }
    if (this.form.valid ) {
      if (this.isEdit) {
      this.loading = true;

        this._crud.post(`farmed_type_ginfos/${this.idEdit}`, data).subscribe(
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
       if( this.file != null){
      this.loading = true;

        this._crud.post(`farmed_type_ginfos`, data).subscribe(
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
    }
  };
  goBack = () => {
    this.route.navigate(["/admin/farmed-blog/farmed-type-ginfos"]);
  };
  file:any=null;
  changeFile($event:any){
  this.file=$event.target.files[0];
  }
}
