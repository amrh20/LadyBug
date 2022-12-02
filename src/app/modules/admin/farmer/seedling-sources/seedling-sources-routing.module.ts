import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateSeedlingSourcesComponent } from "./create-seedling-sources/create-seedling-sources.component";
import { TableSeedlingSourcesComponent } from "./table-seedling-sources/table-seedling-sources.component";

const routes: Routes = [
  {
    path: "",
    component: TableSeedlingSourcesComponent,
  },
  {
    path: "CreateSeedlingSources",
    component: CreateSeedlingSourcesComponent,
  },
  {
    path: "editSeedlingSources/:id",
    component: CreateSeedlingSourcesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeedlingSourcesRoutingModule {}
