import { Component, OnInit } from '@angular/core';
import { CrudRequestsService } from '../../../../core/services/crud-requests.service';
import { SettingService } from '../../../../core/services/setting.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private _CrudRequestsService:CrudRequestsService,private _SettingService:SettingService) { }
  ngOnInit(): void {
    this.getRoles()
  }
  selectedRoles:any=[];
  Roles:any=[];
  
  getRoles =()=>{
    this._CrudRequestsService.get('roles').subscribe((data:any)=>{
    console.log(data.data.all)
    this.Roles = data.data.all
    })
  }
  onSelect(event:any) {
    console.log('event', event);
  }
}