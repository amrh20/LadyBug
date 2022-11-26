import { Component, OnInit } from '@angular/core';
import { CrudRequestsService } from '../../../../core/services/crud-requests.service';
import { SettingService } from '../../../../core/services/setting.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-general-users',
  templateUrl: './general-users.component.html',
  styleUrls: ['./general-users.component.scss']
})
export class GeneralUsersComponent implements OnInit {

  constructor(private _CrudRequestsService:CrudRequestsService,private _SettingService:SettingService) { }
  ngOnInit(): void {
    this.getUsers()
  }
  DataTable:any=[];
  getUsers =()=>{
    this._CrudRequestsService.get('generic_users').subscribe((data:any)=>{
    this.DataTable=data.data.all;
    })
  }

  blockItem =(id:any,$event:any)=>{
    console.log(id)
    console.log($event.checked)
    this._CrudRequestsService.get(`users/toggle_activate/${id}`).subscribe((data:any)=>{
    if(data.success){
      this._SettingService.successHot(data.message)
    }else{
      this._SettingService.errorHot(data.message)

    }
    },(err:any)=>{
      this._SettingService.errorHot(err.message)

    })
  }

  deleteItem =(id:any)=>{
    Swal.fire({
      text: '   هل أنت متاكد من الحذف  ؟',
      allowOutsideClick: true,
      // iconHtml:"<img src='../../../../assets/images/delete-alert.svg'/>",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
      ' تأكيد الحذف',
      confirmButtonAriaLabel:  ' تأكيد الحذف',
      cancelButtonText:
      'التراجع',
    cancelButtonAriaLabel: 'التراجع'
      }).then((val: any)=>{
        if(val.isConfirmed) {
   
        }
       
      })
  }
}
