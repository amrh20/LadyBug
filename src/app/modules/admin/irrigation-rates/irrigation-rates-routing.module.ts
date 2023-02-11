import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateIrrigationRatesComponent } from "./create-irrigation-rates/create-irrigation-rates.component";
import { IrrigationRatesIndexComponent } from "./irrigation-rates-index/irrigation-rates-index.component";
import { IrrigationRatesTableComponent } from "./irrigation-rates-table/irrigation-rates-table.component";

const routes: Routes = [
  {
    path: "",
    component: IrrigationRatesIndexComponent,
    children: [
      { path: "", component: IrrigationRatesTableComponent },
      {
        path: "edit-IrrigationRates/:id",
        component: CreateIrrigationRatesComponent,
      },
      {
        path: "create-IrrigationRates",
        component: CreateIrrigationRatesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IrrigationRatesRoutingModule {}
