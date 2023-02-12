import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";
import { SettingService } from "src/app/core/services/setting.service";

@Component({
  selector: "app-marketing-datas-details",
  templateUrl: "./marketing-datas-details.component.html",
  styleUrls: ["./marketing-datas-details.component.scss"],
})
export class MarketingDatasDetailsComponent implements OnInit {
  id: any;
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
    this._CrudRequestsService
      .get("marketing_datas/" + id)
      .subscribe((data: any) => {
        this.detailsData = data.data;
        this.id = data.data.farmed_type_id;
      });
  };
}
