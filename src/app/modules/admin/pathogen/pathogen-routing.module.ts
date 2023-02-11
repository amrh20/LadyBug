import { RouterModule, Routes } from "@angular/router";

import { AllPathogensComponent } from "./all-pathogens/all-pathogens.component";
import { CreateAffectingAcComponent } from './create_affecting_ac/create-affecting-ac/create-affecting-ac.component';
import { CreatePathogenComponent } from "./create-pathogen/create-pathogen.component";
import { CreatePathogenGrowthStageComponent } from "./pathogen-growth-stage/create-pathogen-growth-stage/create-pathogen-growth-stage.component";
import { GetAffectingAcComponent } from './create_affecting_ac/get-affecting-ac/get-affecting-ac.component';
import { NgModule } from "@angular/core";
import { PathogenDetailsComponent } from "./pathogen-details/pathogen-details.component";
import { PathogenGrowthStageComponent } from "./pathogen-growth-stage/pathogen-growth-stage.component";
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
