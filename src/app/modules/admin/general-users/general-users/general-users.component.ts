import { Component, OnInit } from '@angular/core';
import { CrudRequestsService } from '../../../../core/services/crud-requests.service';
import { SettingService } from '../../../../core/services/setting.service';

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
  deleteItem =(id:any)=>{

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
}
