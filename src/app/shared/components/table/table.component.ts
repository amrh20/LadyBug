import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { SettingService } from "../../../core/services/setting.service";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  constructor(private _SettingService: SettingService) {}

  ngOnInit(): void {}
  deleteItem = () => {
    Swal.fire({
      text: "   هل أنت متاكد من الحذف  ؟",
      allowOutsideClick: true,
      // iconHtml:"<img src='../../../../assets/images/delete-alert.svg'/>",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "تأكيد",
      confirmButtonAriaLabel: " تأكيد الحجر",
      cancelButtonText: "التراجع",
      cancelButtonAriaLabel: "التراجع",
    }).then((val: any) => {
      if (val.isConfirmed) {
        /*   this.requestService.delete(`/ExamsByTrainer/${id}`).subscribe((res) => {
          this.getTrainerExams(this.currentPage2,this.pageSize);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'تم     الحذف بنجاح"',
            showConfirmButton: false,
            timer: 1500
          })
        }); */
      }
    });
  };
}
