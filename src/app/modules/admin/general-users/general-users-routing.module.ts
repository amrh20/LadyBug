import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { GeneralUsersComponent } from './general-users/general-users.component';
import { UserIndexComponent } from './user-index/user-index.component';

const routes: Routes = [
    { 
    path: '', 
    component: UserIndexComponent,
    children: [
      { path: '', component: GeneralUsersComponent } ,
      { path: 'user-details/:id', component: DetailsComponent } ,
      { path: 'edit-user/:id', component: CreateComponent } ,
      { path: 'create-user', component: CreateComponent }    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralUsersRoutingModule { }
