import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";
import { SettingService } from "src/app/core/services/setting.service";

@Component({
  selector: "app-pathogen-details",
  templateUrl: "./pathogen-details.component.html",
  styleUrls: ["./pathogen-details.component.scss"],
})
export class PathogenDetailsComponent implements OnInit {
  constructor(
    private _CrudRequestsService: CrudRequestsService,
    private _activeRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this._activeRoute.params.subscribe((params) => {
      this.getUser(params["id"]);
    });
  }
  detailsData: any = {};
  getUser = (id: any) => {
    this._CrudRequestsService.get("pathogens/" + id).subscribe((data: any) => {
      this.detailsData = data.data;
    });
  };
}
