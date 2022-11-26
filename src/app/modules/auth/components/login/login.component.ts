import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CrudRequestsService} from '../../../../core/services/crud-requests.service';
import {environment} from '../../../../../environments/environment';

@Component({selector: 'app-login', templateUrl: './login.component.html', styleUrls: ['./login.component.scss']})
export class LoginComponent implements OnInit {
    loginForm = new FormGroup({
        identify: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required])
    })
    constructor(private _crud : CrudRequestsService) {}

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

            }, (err : any) => {
                this.loading = false;

            }, () => {})
        }

    }
}
