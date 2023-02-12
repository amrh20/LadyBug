import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CrudRequestsService } from '../../../../../core/services/crud-requests.service';
import { SettingService } from '../../../../../core/services/setting.service';

@Component({
  selector: 'app-create-disease-causative',
  templateUrl: './create-disease-causative.component.html',
  styleUrls: ['./create-disease-causative.component.scss']
})
export class CreateDiseaseCausativeComponent implements OnInit {

  controls:any=[
  
    {
      kay:"درجة حرارة أكبر من",
      val:'temp_gt'
    },
    {
      kay:"درجة حرارة أقل من",
      val:'temp_lt'
    },
    {
      kay:"رطوبة أكبر من",
      val:'humidity_gt'
    },
    {
      kay:"رطوبة أقل من",
      val:'humidity_lt'
    },
    {
      kay:"أس هيدروجيني أكبر من",
      val:'ph_gt'
    },
    {
      kay:"أس هيدروجيني أقل من",
      val:'ph_lt'
    },
    {
      kay: "أملاح تربة أكبر من",
      val:'soil_salts_gt'
    },
    {
      kay:"أملاح تربة أقل من",
      val:'soil_salts_lt'
    },
    {
      kay: "أملاح ماء أكبر من",
      val:'water_salts_gt'
    },
    {
      kay: "أملاح ماء أقل من",
      val:'water_salts_lt'
    },
  

  ]
  form = new FormGroup({
    disease_id: new FormControl('', []),
    temp_gt: new FormControl("", [Validators.required]),
    temp_lt: new FormControl("", [Validators.required]),
    humidity_gt: new FormControl("", [Validators.required]),
    humidity_lt: new FormControl("", [Validators.required]),
    ph_gt: new FormControl("", [Validators.required]),
    ph_lt: new FormControl("", [Validators.required]),
    soil_salts_gt: new FormControl("", [Validators.required]),
    water_salts_gt: new FormControl("", [Validators.required]),
    soil_salts_lt: new FormControl("", [Validators.required]),
    water_salts_lt: new FormControl("", [Validators.required]),
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
  ) { }

  ngOnInit(): void {
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
    this.show = false;
    this._CrudRequestsService.get("disease_causatives/by_disease_id/" + id).subscribe((data: any) => {
      if (JSON.stringify(data.data) === '{}') {
      } else {
        // data.data
        this.form.patchValue({

          disease_id: this.idEdit,
          temp_gt: data.data.temp_gt,
          temp_lt: data.data.temp_lt,
          humidity_gt: data.data.humidity_gt,
          humidity_lt: data.data.humidity_lt,
          ph_gt: data.data.ph_gt,
          ph_lt: data.data.ph_lt,
          soil_salts_gt: data.data.soil_salts_gt,
          soil_salts_lt: data.data.soil_salts_lt,
          water_salts_gt: data.data.water_salts_gt,
          water_salts_lt: data.data.water_salts_lt

        })
      }


    });
  };



  sendData = () => {
    this.isSubmit = true;
    let data = {
      ...this.form.value,
      disease_id: this.idEdit,

    };
    if (
      this.form.valid
    ) {
      this.loading = true;

      this._crud.post(`disease_causatives`, data).subscribe(
        (res: any) => {
          this.loading = false;
          this.isSubmit = false;
          if (res.success) {
            this._setting.successHot(res.message);
          } else {
            this._setting.errorHot(res.message);
          }
          this.goBack()

        },
        (err: any) => {
          this.loading = false;
          this._setting.errorHot(err.message);
        },
        () => { }
      );

    }
  };
  goBack = () => {
    this.route.navigate(["/admin/Diseases/DiseaseCausative/", this.idEdit]);
  };


}
