import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CrudRequestsService } from '../../../../../core/services/crud-requests.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.scss']
})
export class ShowDataComponent implements OnInit {

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
    this._CrudRequestsService.get("one_affecting_ac/" + id).subscribe((data: any) => {
      this.detailsData = data.data;
    });
  };
}
