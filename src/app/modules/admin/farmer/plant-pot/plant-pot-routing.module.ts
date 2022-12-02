import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CeatePlantPotComponent } from "./ceate-plant-pot/ceate-plant-pot.component";
import { TablePlantPotComponent } from "./table-plant-pot/table-plant-pot.component";

const routes: Routes = [
  {
    path: "",
    component: TablePlantPotComponent,
  },
  {
    path: "CreatePlantPot",
    component: CeatePlantPotComponent,
  },
  {
    path: "editPlantPot/:id",
    component: CeatePlantPotComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantPotRoutingModule {}
