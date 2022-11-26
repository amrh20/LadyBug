import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RolesRoutingModule } from "./roles-routing.module";
import { AllRolesComponent } from "./all-roles/all-roles.component";
import { RolesIndexComponent } from "./roles-index/roles-index.component";
import { RoleDetailsComponent } from "./role-details/role-details.component";
import { CreateRoleComponent } from "./create-role/create-role.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    AllRolesComponent,
    RolesIndexComponent,
    RoleDetailsComponent,
    CreateRoleComponent,
  ],
  imports: [CommonModule, RolesRoutingModule, SharedModule, RouterModule],
})
export class RolesModule {}
