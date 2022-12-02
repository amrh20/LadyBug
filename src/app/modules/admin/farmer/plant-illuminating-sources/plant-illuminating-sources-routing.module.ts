import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreatePlantSourcesComponent } from "./create-plant-sources/create-plant-sources.component";
import { TablePlantSourcesComponent } from "./table-plant-sources/table-plant-sources.component";

const routes: Routes = [
  {
    path: "",
    component: TablePlantSourcesComponent,
  },
  {
    path: "CreatePlantSources",
    component: CreatePlantSourcesComponent,
  },
  {
    path: "editPlantSources/:id",
    component: CreatePlantSourcesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantIlluminatingSourcesRoutingModule {}
