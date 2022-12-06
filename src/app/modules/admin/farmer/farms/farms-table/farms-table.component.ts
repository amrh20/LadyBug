import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CrudRequestsService } from '../../../../../core/services/crud-requests.service';
import { SettingService } from '../../../../../core/services/setting.service';
import { FormGroup, FormControl } from '@angular/forms';

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
  constructor(
    private _CrudRequestsService: CrudRequestsService,
    private _SettingService: SettingService
  ) {}
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers = () => {
    this._CrudRequestsService
      .get("farms" + `?page=${this.current}&perPage=10`)
      .subscribe((data: any) => {
        this.DataTable = data.data.all;
        this.last = data.data.meta.pagesCount;
      });
  };

  search() {
    let title = this.filterForm.get("title")?.value;

    this._CrudRequestsService
      .get(`farms?name=${title}&page=${this.current}&perPage=10`)
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

}
