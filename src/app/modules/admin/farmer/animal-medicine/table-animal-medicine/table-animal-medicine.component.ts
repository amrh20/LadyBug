import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { CrudRequestsService } from "src/app/core/services/crud-requests.service";
import { SettingService } from "src/app/core/services/setting.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-table-animal-medicine",
  templateUrl: "./table-animal-medicine.component.html",
  styleUrls: ["./table-animal-medicine.component.scss"],
})
export class TableAnimalMedicineComponent implements OnInit {
  DataTable: any = [];
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
  getUsers = () => {
    this._CrudRequestsService
      .get("animal_medicine_sources" + `?page=${this.current}&perPage=10`)
      .subscribe((data: any) => {
        this.DataTable = data.data.all;
        this.last = data.data.meta.pagesCount;
      });
  };

  search() {
    let name = this.filterForm.get("name")?.value;

    this._CrudRequestsService
      .get(
        `animal_medicine_sources?name=${name}&page=${this.current}&perPage=10`
      )
      .subscribe((data: any) => {
        this.DataTable = data.data.all;
        this.last = data.data.meta.pagesCount;
      });
  }
  deleteItem = (id: any) => {
    Swal.fire({
      text: "   هل أنت متاكد من الحذف  ؟",
      allowOutsideClick: true,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "تأكيد",
      confirmButtonAriaLabel: " تأكيد الحجر",
      cancelButtonText: "التراجع",
      cancelButtonAriaLabel: "التراجع",
    }).then((val: any) => {
      if (val.isConfirmed) {
        this._CrudRequestsService
          .delete("animal_medicine_sources/" + id)
          .subscribe(
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
  current: any = 1;
  last: any = 0;
  pageChange($e: any) {
    this.current = $e;
    this.search();
  }
}
