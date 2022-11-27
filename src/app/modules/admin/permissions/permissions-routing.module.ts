import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllPermissionComponent } from "./all-permission/all-permission.component";
import { CreatePermissionComponent } from "./create-permission/create-permission.component";
import { PermissionDetailsComponent } from "./permission-details/permission-details.component";
import { PermissionIndexComponent } from "./permission-index/permission-index.component";

const routes: Routes = [
  {
    path: "",
    component: PermissionIndexComponent,
    children: [
      { path: "", component: AllPermissionComponent },
      { path: "permission-details/:id", component: PermissionDetailsComponent },
      { path: "create-permission/:id", component: CreatePermissionComponent },
      { path: "create-permission", component: CreatePermissionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermissionsRoutingModule {}
