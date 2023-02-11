import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CrudRequestsService } from '../../../../core/services/crud-requests.service';

@Component({
  selector: 'app-details-fertilizers',
  templateUrl: './details-fertilizers.component.html',
  styleUrls: ['./details-fertilizers.component.scss']
})
export class DetailsFertilizersComponent implements OnInit {

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
    this._CrudRequestsService.get("admin/fertilizers/" + id).subscribe((data: any) => {
      this.detailsData = data.data;
    });
  };

  getObj(obj:any){
    for (const [key, value] of Object.entries(obj)) {
      console.log(`${key}: ${value}`);
  }
  }
}
