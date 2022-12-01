import { Component, OnInit } from "@angular/core";
import { CrudRequestsService } from "../../../../../core/services/crud-requests.service";
import { SettingService } from "../../../../../core/services/setting.service";
import Swal from "sweetalert2";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-post-blocked",
  templateUrl: "./post-blocked.component.html",
  styleUrls: ["./post-blocked.component.scss"],
})
export class PostBlockedComponent implements OnInit {
  DataTable: any = [];
  filterForm = new FormGroup({
    content: new FormControl(""),
  });
  constructor(
    private _CrudRequestsService: CrudRequestsService,
    private _SettingService: SettingService
  ) {}
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers = () => {
    this._CrudRequestsService.get("reports"+`?page=${this.current}&perPage=10`).subscribe((data: any) => {
      this.DataTable = data.data.all;
      this.last= data.data.meta.pagesCount;
    });
  };

  search() {
    let content = this.filterForm.get("content")?.value;
    this._CrudRequestsService
      .get(`reports?content=${content}&page=${this.current}&perPage=10`)
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
        this._CrudRequestsService.delete("post_types/" + id).subscribe(
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
    this.search()
  }
}
