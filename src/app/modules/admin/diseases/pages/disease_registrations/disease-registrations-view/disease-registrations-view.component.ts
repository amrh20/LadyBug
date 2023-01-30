import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

import { CrudRequestsService } from "../../../../../../core/services/crud-requests.service";
import { SettingService } from "../../../../../../core/services/setting.service";

@Component({
  selector: "app-disease-registrations-view",
  templateUrl: "./disease-registrations-view.component.html",
  styleUrls: ["./disease-registrations-view.component.scss"],
})
export class DiseaseRegistrationsViewComponent implements OnInit {
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
      .get("admin/disease_registrations/" + id)
      .subscribe((data: any) => {
        this.detailsData = data.data;
      });
  };
}
