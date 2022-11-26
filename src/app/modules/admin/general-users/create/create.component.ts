import { Component, OnInit } from '@angular/core'
import { CrudRequestsService } from '../../../../core/services/crud-requests.service'
import { SettingService } from '../../../../core/services/setting.service'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { passwordMatchingValidatior } from '../../../../core/validators/confirm-validators'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  form = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      password_confirmation: new FormControl('', [Validators.required]),
    },
    { validators: passwordMatchingValidatior },
  )
  constructor(
    private _CrudRequestsService: CrudRequestsService,
    private _SettingService: SettingService,
    private _crud:CrudRequestsService,
    private _setting:SettingService,
    private route:Router,
    private _activeRoute:ActivatedRoute
  ) {}
  isEdit:any=false;
  idEdit:any;
  ngOnInit(): void {
    this.getRoles();
    if(this.route.url.includes('edit-user')){
      this._activeRoute.params.subscribe(
        params => {
          this.getUser(params['id'])
          this.idEdit=params['id'];
        });
    }
  }
  getUser =(id:any)=>{     
     this.isEdit=true;

    this.passSelected=false;
    this._CrudRequestsService.get('generic_users/'+id).subscribe((data:any)=>{
      this.form.patchValue({
        name: data.data.name,
      email: data.data.email,
      mobile: data.data.mobile,
      password_confirmation: data.data.mobile,
      password: data.data.mobile,
      })
      this.passSelected=true;
      let arr=[]
      for (var i = 0, len = data.data.roles.length; i < len; i++) {
        arr.push(data.data.roles[i].id)
      };
      this.selectedRoles=arr;
    })
  }
  selectedRoles: any[] = []
  Roles: any[] = []

  getRoles = () => {
    this._CrudRequestsService.get('roles').subscribe((data: any) => {
      this.Roles = data.data.all;
    })
  }
  onSelect(event: any) {
    this.selectedRoles = event
  }
  passSelected:any=true;
  loading: any = false
  isSubmit: any = false
  sendData = () => {
    this.isSubmit = true
    if (this.form.valid && this.selectedRoles.length != 0) {
      this.loading = true;
      let data ={
        ...this.form.value,
        roles:this.selectedRoles
      }
      if(this.isEdit){
        this._crud.put(`users/${this.idEdit}`, data).subscribe((res : any) => {
          this.loading = false;
          if(res.success){
              this._setting.successHot(res.message)
          }else{
              this._setting.errorHot(res.message)
  
          }
      }, (err : any) => {
          this.loading = false;
          this._setting.errorHot(err.message)
  
      }, () => {})
      }else{
        this._crud.post(`users`, data).subscribe((res : any) => {
          this.loading = false;
          if(res.success){
            this.passSelected=false;
              this._setting.successHot(res.message)
              this.form.reset();
              this.selectedRoles=[];
              this.goBack()
          }else{
              this._setting.errorHot(res.message)
  
          }
      }, (err : any) => {
          this.loading = false;
          this._setting.errorHot(err.message)
  
      }, () => {})
      }
    
    }
  }
  goBack =()=>{
    
    this.route.navigate(['/admin/generic-user'])
  }
}