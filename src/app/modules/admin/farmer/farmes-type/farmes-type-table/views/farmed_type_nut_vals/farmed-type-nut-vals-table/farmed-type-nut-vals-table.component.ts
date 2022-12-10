import { Component, OnInit } from '@angular/core';
import { CrudRequestsService } from '../../../../../../../../core/services/crud-requests.service';
import { SettingService } from '../../../../../../../../core/services/setting.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-farmed-type-nut-vals-table',
  templateUrl: './farmed-type-nut-vals-table.component.html',
  styleUrls: ['./farmed-type-nut-vals-table.component.scss']
})
export class FarmedTypeNutValsTableComponent implements OnInit {

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
    this._CrudRequestsService.get("farmed_type_nut_vals/by_ft_id/" + id).subscribe((data: any) => {
      this.detailsData = data.data;
    });
  };
}
