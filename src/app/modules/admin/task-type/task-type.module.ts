import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TaskTypeRoutingModule } from "./task-type-routing.module";
import { TaskTypeIndexComponent } from "./task-type-index/task-type-index.component";
import { CreateTaskTypeComponent } from "./create-task-type/create-task-type.component";
import { AllTaskTypesComponent } from "./all-task-types/all-task-types.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { MaterialModule } from "src/app/core/material-module.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    TaskTypeIndexComponent,
    CreateTaskTypeComponent,
    AllTaskTypesComponent,
  ],
  imports: [
    CommonModule,
    TaskTypeRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TaskTypeModule {}
