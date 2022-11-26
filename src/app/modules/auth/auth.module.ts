import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './components/login/login.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    IndexComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    TranslateModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
