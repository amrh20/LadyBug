import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";

@Component({
  selector: "app-role-details",
  templateUrl: "./role-details.component.html",
  styleUrls: ["./role-details.component.scss"],
})
export class RoleDetailsComponent implements OnInit {
  PermissionsDetails: any;
  constructor(
    private _crudeService: CrudRequestsService,
    private _activeRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activeRouter.params.subscribe((res: any) => {
      this._crudeService.get(`roles/${res.id}`).subscribe((res: any) => {
        this.PermissionsDetails = res.data;
        console.log(this.PermissionsDetails.permissions);
      });
    });
  }
}
