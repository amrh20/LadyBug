import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllRolesComponent } from './all-roles/all-roles.component';
import { RoleDetailsComponent } from './role-details/role-details.component';
import { RolesIndexComponent } from './roles-index/roles-index.component';

const routes: Routes = [
    { 
    path: '', 
    component: RolesIndexComponent,
    children: [
      { path: '', component: AllRolesComponent } ,
      { path: 'role-details/:id', component: RoleDetailsComponent } ,
      { path: 'create-role', component: RoleDetailsComponent }    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
