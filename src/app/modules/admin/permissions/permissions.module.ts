import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PermissionsRoutingModule } from "./permissions-routing.module";
import { CreatePermissionComponent } from "./create-permission/create-permission.component";
import { PermissionIndexComponent } from "./permission-index/permission-index.component";
import { PermissionDetailsComponent } from "./permission-details/permission-details.component";
import { AllPermissionComponent } from "./all-permission/all-permission.component";
import { MaterialModule } from "src/app/core/material-module.module";
import { SharedModule } from "src/app/shared/shared.module";
import { TranslateModule } from "@ngx-translate/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    CreatePermissionComponent,
    PermissionIndexComponent,
    PermissionDetailsComponent,
    AllPermissionComponent,
  ],
  imports: [
    CommonModule,
    PermissionsRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PermissionsModule {}
