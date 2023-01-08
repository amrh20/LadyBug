import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReportsRoutingModule } from "./reports-routing.module";
import { ReportIndexComponent } from "./report-index/report-index.component";
import { AllReportsComponent } from "./all-reports/all-reports.component";
import { CreateReportComponent } from "./create-report/create-report.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { MaterialModule } from "src/app/core/material-module.module";
import { SharedModule } from "src/app/shared/shared.module";
import { ReportDetailsComponent } from './report-details/report-details.component';

@NgModule({
  declarations: [
    ReportIndexComponent,
    AllReportsComponent,
    CreateReportComponent,
    ReportDetailsComponent,
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ReportsModule {}
