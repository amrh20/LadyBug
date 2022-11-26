import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CrudRequestsService} from '../../../../core/services/crud-requests.service';
import {environment} from '../../../../../environments/environment';
import { Router } from '@angular/router';
import { SettingService } from '../../../../core/services/setting.service';

@Component({selector: 'app-login', templateUrl: './login.component.html', styleUrls: ['./login.component.scss']})
export class LoginComponent implements OnInit {
    loginForm = new FormGroup({
        identify: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required])
    })
    constructor(private _crud : CrudRequestsService,private _route:Router,private _setting:SettingService) {}

    ngOnInit(): void {}
    loading : any = false;
    submitted : any = false;
    login = () => {
        this.submitted = true;

        if (this.loginForm.valid) {
            this.loading = true;
            this._crud.post(`auth/login`, this.loginForm.value).subscribe((res : any) => {
                console.log(res)
                this.loading = false;
                if(res.success){
                    localStorage.setItem('_token',res?.data?.access_token)
                    localStorage.setItem('_user',JSON.stringify(res?.data?.user))
                    this._route.navigate(['/admin/']);
                    this._setting.successHot(res.message)
                    
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
