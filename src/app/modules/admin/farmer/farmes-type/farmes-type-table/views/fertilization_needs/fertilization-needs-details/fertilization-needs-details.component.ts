import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";

@Component({
  selector: "app-fertilization-needs-details",
  templateUrl: "./fertilization-needs-details.component.html",
  styleUrls: ["./fertilization-needs-details.component.scss"],
})
export class FertilizationNeedsDetailsComponent implements OnInit {
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
      .get("farmed_type_fertilization_needs/" + id)
      .subscribe((data: any) => {
        this.detailsData = data.data;
        this.id = data.data.farmed_type_id;
      });
  };
}
