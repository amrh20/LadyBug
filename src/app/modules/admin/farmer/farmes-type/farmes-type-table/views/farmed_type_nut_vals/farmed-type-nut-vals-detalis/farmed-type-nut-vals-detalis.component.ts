import { Component, OnInit } from '@angular/core';
import { CrudRequestsService } from '../../../../../../../../core/services/crud-requests.service';
import { SettingService } from '../../../../../../../../core/services/setting.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-farmed-type-nut-vals-detalis',
  templateUrl: './farmed-type-nut-vals-detalis.component.html',
  styleUrls: ['./farmed-type-nut-vals-detalis.component.scss']
})
export class FarmedTypeNutValsDetalisComponent implements OnInit {

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
      this.getUser(params["id"]);
    });
  }
  detailsData: any = {};
  getUser = (id: any) => {
    this._CrudRequestsService.get("farmed_type_nut_vals/" + id).subscribe((data: any) => {
      this.detailsData = data.data;
    });
  };
}
