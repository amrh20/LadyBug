import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent implements OnInit {
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
      .get("admin/products/" + id)
      .subscribe((data: any) => {
        this.detailsData = data.data;
        console.log(data.data);
      });
  };
}
