import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";

@Component({
  selector: "app-sensitive-disease-details",
  templateUrl: "./sensitive-disease-details.component.html",
  styleUrls: ["./sensitive-disease-details.component.scss"],
})
export class SensitiveDiseaseDetailsComponent implements OnInit {
  id: any;
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
    this._CrudRequestsService
      .get("one_sensitive_disease/" + id)
      .subscribe((data: any) => {
        this.detailsData = data.data;
        this.id = data.data.farmed_type_id;
      });
  };
}
