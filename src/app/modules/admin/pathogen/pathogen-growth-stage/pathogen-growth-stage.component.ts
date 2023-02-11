import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";
import { SettingService } from "src/app/core/services/setting.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-pathogen-growth-stage",
  templateUrl: "./pathogen-growth-stage.component.html",
  styleUrls: ["./pathogen-growth-stage.component.scss"],
})
export class PathogenGrowthStageComponent implements OnInit {
  DataTable: any;
  id: any;
  filterForm = new FormGroup({
    name: new FormControl(""),
  });
  constructor(
    private activeRoute: ActivatedRoute,
    private _crudService: CrudRequestsService,
    private _SettingService: SettingService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((res: any) => {
      this.id = res.id;
    });
    this.getpathogensStages();
  }
  getpathogensStages() {
    this._crudService
      .get(`pathogen_growth_stages/by_pa_id/${this.id}`)
      .subscribe((res: any) => {
        this.DataTable = res.data;
      });
  }
  current: any = 1;
  last: any = 0;
  pageChange($e: any) {
    this.current = $e;
  }
  deleteItem = (id: any) => {
    Swal.fire({
      text: "   هل أنت متاكد من الحذف  ؟",
      allowOutsideClick: true,
      // iconHtml:"<img src='../../../../assets/images/delete-alert.svg'/>",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "تأكيد",
      confirmButtonAriaLabel: "تأكيد",
      cancelButtonText: "التراجع",
      cancelButtonAriaLabel: "التراجع",
    }).then((val: any) => {
      if (val.isConfirmed) {
        this._crudService
          .delete(`pathogen_growth_stages/${id}`)
          .subscribe((res: any) => {
            if (res.success) {
              this._SettingService.successHot("تم الحذف بنجاح");
              this.getpathogensStages();
            } else {
              this._SettingService.errorHot(res.message);
            }
          });
      }
    });
  };

  search() {
    // let name = this.filterForm.get("name")?.value;
    // console.log(name);
    // let email = this.filterForm.get("email")?.value;
    // let mobile = this.filterForm.get("mobile")?.value;
    // this._CrudRequestsService
    //   .get(
    //     `pathogens?name=${name}&email=${email}&mobile=${mobile}&page=${this.current}&perPage=10`
    //   )
    //   .subscribe((data: any) => {
    //     this.DataTable = data.data.all;
    //     this.last = data.data.meta.pagesCount;
    //   });
  }
}
