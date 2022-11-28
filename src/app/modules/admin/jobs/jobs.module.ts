import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { JobsRoutingModule } from "./jobs-routing.module";
import { AllJobsComponent } from "./all-jobs/all-jobs.component";
import { JobsIndexComponent } from "./jobs-index/jobs-index.component";
import { CreateJobComponent } from "./create-job/create-job.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { MaterialModule } from "src/app/core/material-module.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [AllJobsComponent, JobsIndexComponent, CreateJobComponent],
  imports: [
    CommonModule,
    JobsRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class JobsModule {}
