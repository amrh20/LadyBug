import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralUsersRoutingModule } from './general-users-routing.module';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { GeneralUsersComponent } from './general-users/general-users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserIndexComponent } from './user-index/user-index.component';
import { MaterialModule } from 'src/app/core/material-module.module';


@NgModule({
  declarations: [
    DetailsComponent,
    CreateComponent,
    GeneralUsersComponent,
    UserIndexComponent
  ],
  imports: [
    CommonModule,
    GeneralUsersRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class GeneralUsersModule { }
