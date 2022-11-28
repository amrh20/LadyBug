import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./index/index.component";

const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
    children: [
      {
        path: "generic-user",
        loadChildren: () =>
          import("./general-users/general-users.module").then(
            (m) => m.GeneralUsersModule
          ),
      },
      {
        path: "roles",
        loadChildren: () =>
          import("./roles/roles.module").then((m) => m.RolesModule),
      },
      {
        path: "permissions",
        loadChildren: () =>
          import("./permissions/permissions.module").then(
            (m) => m.PermissionsModule
          ),
      },
      {
        path: "task-type",
        loadChildren: () =>
          import("./task-type/task-type.module").then((m) => m.TaskTypeModule),
      },
      {
        path: "jobs",
        loadChildren: () =>
          import("./jobs/jobs.module").then((m) => m.JobsModule),
      },
      {
        path: "measuring-units",
        loadChildren: () =>
          import("./measuring-units/measuring-units.module").then(
            (m) => m.MeasuringUnitsModule
          ),
      },

      {
        path: "",
        redirectTo: "generic-user",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
