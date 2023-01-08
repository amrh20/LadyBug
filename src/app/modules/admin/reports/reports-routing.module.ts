import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllReportsComponent } from "./all-reports/all-reports.component";
import { CreateReportComponent } from "./create-report/create-report.component";
import { ReportDetailsComponent } from "./report-details/report-details.component";
import { ReportIndexComponent } from "./report-index/report-index.component";

const routes: Routes = [
  {
    path: "",
    component: ReportIndexComponent,
    children: [
      { path: "", component: AllReportsComponent },
      { path: "create-report", component: CreateReportComponent },
      { path: "edit-report/:id", component: CreateReportComponent },
      { path: "report-details/:id", component: ReportDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
