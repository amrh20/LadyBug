import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateAcidityTypesComponent } from "./create-acidity-types/create-acidity-types.component";
import { TableAcidityTypesComponent } from "./table-acidity-types/table-acidity-types.component";

const routes: Routes = [
  {
    path: "",
    component: TableAcidityTypesComponent,
  },
  {
    path: "CreateAcidityTypes",
    component: CreateAcidityTypesComponent,
  },
  {
    path: "editAcidityTypes/:id",
    component: CreateAcidityTypesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcidityTypesRoutingModule {}
