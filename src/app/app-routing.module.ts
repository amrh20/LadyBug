import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ISloginAdminGuard } from "./core/guards/islogin-admin.guard";

const routes: Routes = [
  {
    path: "admin",
    loadChildren: () =>
      import("./modules/admin/admin.module").then((m) => m.AdminModule),
    canLoad: [ISloginAdminGuard],
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./modules/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "",
    redirectTo: "admin",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
