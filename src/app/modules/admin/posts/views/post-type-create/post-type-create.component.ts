import { Component, OnInit } from '@angular/core';
import { CrudRequestsService } from '../../../../../core/services/crud-requests.service';
import { SettingService } from '../../../../../core/services/setting.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-type-create',
  templateUrl: './post-type-create.component.html',
  styleUrls: ['./post-type-create.component.scss']
})
export class PostTypeCreateComponent implements OnInit {


  form = new FormGroup(
    {
      name_ar_localized: new FormControl("", [Validators.required]),
      name_en_localized: new FormControl("", [Validators.required]),
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
  }
  getUser = (id: any) => {
    this.isEdit = true;

    this._CrudRequestsService.get("post_types/" + id).subscribe((data: any) => {
      this.form.patchValue({
        name_ar_localized: data.data.name_ar_localized,
        name_en_localized: data.data.name_en_localized,
      });
    });
  };

  sendData = () => {
    this.isSubmit = true;
    let data={
      name:{
        ar:this.form.value.name_ar_localized,
        en:this.form.value.name_en_localized,
      }
    };
    if (this.form.valid) {
      this.loading = true;
      if (this.isEdit) {
        this._crud.put(`post_types/${this.idEdit}`, data).subscribe(
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
       
        this._crud.post(`post_types`, data).subscribe(
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
    this.route.navigate(["/admin/posts/TypeBlocked"]);
  };


}
