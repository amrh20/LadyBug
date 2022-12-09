import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllPathogensComponent } from "./all-pathogens/all-pathogens.component";
import { CreatePathogenComponent } from "./create-pathogen/create-pathogen.component";
import { PathogenDetailsComponent } from "./pathogen-details/pathogen-details.component";
import { PathogenIndexComponent } from "./pathogen-index/pathogen-index.component";

const routes: Routes = [
  {
    path: "",
    component: PathogenIndexComponent,
    children: [
      { path: "", component: AllPathogensComponent },
      { path: "pathogen-details/:id", component: PathogenDetailsComponent },
      { path: "edit-pathogen/:id", component: CreatePathogenComponent },
      { path: "create-pathogen", component: CreatePathogenComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PathogenRoutingModule {}
