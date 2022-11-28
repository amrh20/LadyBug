import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllMeasuringUnitsComponent } from "./all-measuring-units/all-measuring-units.component";
import { CreateMeasuringUnitsComponent } from "./create-measuring-units/create-measuring-units.component";
import { MeasuringUnitsIndexComponent } from "./measuring-units-index/measuring-units-index.component";

const routes: Routes = [
  {
    path: "",
    component: MeasuringUnitsIndexComponent,
    children: [
      { path: "", component: AllMeasuringUnitsComponent },
      {
        path: "create-measuring-units",
        component: CreateMeasuringUnitsComponent,
      },
      {
        path: "create-measuring-units/:id",
        component: CreateMeasuringUnitsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeasuringUnitsRoutingModule {}
