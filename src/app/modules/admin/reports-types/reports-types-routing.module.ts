import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllReportsComponent } from "../reports/all-reports/all-reports.component";
import { AllReportsTypesComponent } from "./all-reports-types/all-reports-types.component";
import { CreateReportsTypeComponent } from "./create-reports-type/create-reports-type.component";
import { ReportsTypesIndexComponent } from "./reports-types-index/reports-types-index.component";

const routes: Routes = [
  {
    path: "",
    component: ReportsTypesIndexComponent,
    children: [
      { path: "", component: AllReportsTypesComponent },
      { path: "create-report-type", component: CreateReportsTypeComponent },
      { path: "create-report-type/:id", component: CreateReportsTypeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsTypesRoutingModule {}
