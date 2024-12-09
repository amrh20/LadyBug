import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { CrudRequestsService } from '../../../../../core/services/crud-requests.service';
import { SettingService } from '../../../../../core/services/setting.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-farms-table',
  templateUrl: './farms-table.component.html',
  styleUrls: ['./farms-table.component.scss']
})
export class FarmsTableComponent implements OnInit {


  DataTable: any = [];
  filterForm = new FormGroup({
    title: new FormControl(""),
  });
  constructor (
    private _CrudRequestsService: CrudRequestsService,
    private _SettingService: SettingService
  ) { }
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers = () => {
    this._CrudRequestsService
      .get("farms" + `?page=${ this.current }&perPage=10`)
      .subscribe((data: any) => {
        this.DataTable = data.data.all;
        this.last = data.data.meta.pagesCount;
      });
  };

  hasValue(): boolean {
    return Object.values(this.filterForm.controls).some(control => control.value);
  }
  reset() {
    this.filterForm.reset()
    this._CrudRequestsService
      .get(
        `farms?page=${ this.current }&perPage=10`
      )
      .subscribe((data: any) => {
        this.DataTable = data.data.all;
        this.last = data.data.meta.pagesCount;
      });
  }

  search() {
    let title = this.filterForm.get("title")?.value;

    this._CrudRequestsService
      .get(`farms?name=${ title }&page=${ this.current }&perPage=10`)
      .subscribe((data: any) => {
        this.DataTable = data.data.all;
        this.last = data.data.meta.pagesCount;
      });
  }

  current: any = 1;
  last: any = 0;
  pageChange($e: any) {
    this.current = $e;
    this.search();
  }
  // 
  isShow: any = false;
  productName: any = "";
  productId: any = "";
  productRate: any = "";
  allT: any = "";
  isHide(e: any) {
    this.isShow = false;
  }
  openRate(item: any) {
    this.isShow = true;
    this.productName = item.admin;
    this.productId = item.id;
    if (item.ladybug_rating == '20%') {
      this.productRate = 1;

    } else if (item.ladybug_rating == '40%') {
      this.productRate = 2;

    } else if (item.ladybug_rating == '60%') {
      this.productRate = 3;

    } else if (item.ladybug_rating == '80%') {
      this.productRate = 4;

    } else if (item.ladybug_rating == '100%') {
      this.productRate = 5;
    } else {
      this.productRate = 0;

    }
    this.allT = item.ladybug_rating;

  }
  reGet($e: any) {
    this.getUsers();
  }
}
