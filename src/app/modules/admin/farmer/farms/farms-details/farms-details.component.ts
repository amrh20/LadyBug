import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";

@Component({
  selector: "app-farms-details",
  templateUrl: "./farms-details.component.html",
  styleUrls: ["./farms-details.component.scss"],
})
export class FarmsDetailsComponent implements OnInit {
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
      .get("farms/admin_show/" + id)
      .subscribe((data: any) => {
        this.detailsData = data.data;
      });
  };
}
