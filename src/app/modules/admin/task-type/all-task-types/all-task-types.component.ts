import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";
import { SettingService } from "src/app/core/services/setting.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-all-task-types",
  templateUrl: "./all-task-types.component.html",
  styleUrls: ["./all-task-types.component.scss"],
})
export class AllTaskTypesComponent implements OnInit {
  filterForm = new FormGroup({
    name: new FormControl(""),
  });
  constructor(
    private _CrudRequestsService: CrudRequestsService,
    private _SettingService: SettingService
  ) {}
  ngOnInit(): void {
    this.getUsers();
  }
  DataTable: any = [];
  getUsers = () => {
    this._CrudRequestsService.get("task_types"+`?page=${this.current}&perPage=10`).subscribe((data: any) => {
      this.DataTable = data.data.all;
      this.last= data.data.meta.pagesCount;
    });
  };
  search() {
    let name = this.filterForm.get("name")?.value;
    this._CrudRequestsService
      .get(`task_types?name=${name}&page=${this.current}&perPage=10`)
      .subscribe((data: any) => {
        this.DataTable = data.data.all;
        this.last= data.data.meta.pagesCount;

      });
  }
  deleteItem = (id: any) => {
    Swal.fire({
      text: "   هل أنت متاكد من الحذف  ؟",
      allowOutsideClick: true,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: " تأكيد الحذف",
      confirmButtonAriaLabel: " تأكيد الحجر",
      cancelButtonText: "التراجع",
      cancelButtonAriaLabel: "التراجع",
    }).then((val: any) => {
      if (val.isConfirmed) {
        this._CrudRequestsService.delete(`task_types/${id}`).subscribe(
          (res: any) => {
            this._SettingService.successHot(res.message);
            this.getUsers();
          },
          (err) => {
            this._SettingService.errorHot(err.message);
          }
        );
      }
    });
  };
  current:any=1;
  last:any=0;
  pageChange($e:any){
    this.current=$e;
    this.search();

  }
}
