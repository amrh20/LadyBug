import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllTaskTypesComponent } from "./all-task-types/all-task-types.component";
import { CreateTaskTypeComponent } from "./create-task-type/create-task-type.component";
import { TaskTypeIndexComponent } from "./task-type-index/task-type-index.component";

const routes: Routes = [
  {
    path: "",
    component: TaskTypeIndexComponent,
    children: [
      { path: "", component: AllTaskTypesComponent },
      { path: "create-task-type", component: CreateTaskTypeComponent },
      { path: "create-task-type/:id", component: CreateTaskTypeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskTypeRoutingModule {}
