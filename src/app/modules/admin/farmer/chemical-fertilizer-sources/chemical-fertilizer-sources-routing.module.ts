import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateChemicalFertilizerSourcesComponent } from "./create-chemical-fertilizer-sources/create-chemical-fertilizer-sources.component";
import { TableChemicalFertilizerSourcesComponent } from "./table-chemical-fertilizer-sources/table-chemical-fertilizer-sources.component";

const routes: Routes = [
  {
    path: "",
    component: TableChemicalFertilizerSourcesComponent,
  },
  {
    path: "CreateChemicalFertilizer",
    component: CreateChemicalFertilizerSourcesComponent,
  },
  {
    path: "editChemicalFertilizer/:id",
    component: CreateChemicalFertilizerSourcesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChemicalFertilizerSourcesRoutingModule {}
