import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";
import { SettingService } from "src/app/core/services/setting.service";

@Component({
  selector: "app-fertilization-needs-details",
  templateUrl: "./fertilization-needs-details.component.html",
  styleUrls: ["./fertilization-needs-details.component.scss"],
})
export class FertilizationNeedsDetailsComponent implements OnInit {
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
      .get("farmed_type_fertilization_needs/" + id)
      .subscribe((data: any) => {
        this.detailsData = data.data;
      });
  };
}
