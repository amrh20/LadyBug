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
        path: "farmed-blog",
        loadChildren: () =>
          import("./crops/crops.module").then((m) => m.CropsModule),
      },
      {
        path: "insecticides",
        loadChildren: () =>
          import("./insecticides/insecticides.module").then(
            (m) => m.InsecticidesModule
          ),
      },
      {
        path: "Diseases",
        loadChildren: () =>
          import("./diseases/diseases.module").then((m) => m.DiseasesModule),
      },
      {
        path: "farmer",
        loadChildren: () =>
          import("./farmer/farmer.module").then((m) => m.FarmerModule),
      },
      {
        path: "Product",
        loadChildren: () =>
          import("./products/products.module").then((m) => m.ProductsModule),
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
        path: "posts",
        loadChildren: () =>
          import("./posts/posts.module").then((m) => m.PostsModule),
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
        path: "acs",
        loadChildren: () => import("./acs/acs.module").then((m) => m.AcsModule),
      },
      {
        path: "pathogen",
        loadChildren: () =>
          import("./pathogen/pathogen.module").then((m) => m.PathogenModule),
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
