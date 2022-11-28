import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllJobsComponent } from "./all-jobs/all-jobs.component";
import { CreateJobComponent } from "./create-job/create-job.component";
import { JobsIndexComponent } from "./jobs-index/jobs-index.component";

const routes: Routes = [
  {
    path: "",
    component: JobsIndexComponent,
    children: [
      { path: "", component: AllJobsComponent },
      { path: "create-job", component: CreateJobComponent },
      { path: "create-job/:id", component: CreateJobComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobsRoutingModule {}
