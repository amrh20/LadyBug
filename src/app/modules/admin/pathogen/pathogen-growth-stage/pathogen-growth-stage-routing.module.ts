import { RouterModule, Routes } from "@angular/router";

import { CreateAffectingAcComponent } from '../create_affecting_ac/create-affecting-ac/create-affecting-ac.component';
import { CreatePathogenGrowthStageComponent } from "./create-pathogen-growth-stage/create-pathogen-growth-stage.component";
import { GetAffectingAcComponent } from '../create_affecting_ac/get-affecting-ac/get-affecting-ac.component';
import { IndexPathogenGrowthStageComponent } from "./index-pathogen-growth-stage/index-pathogen-growth-stage.component";
import { NgModule } from "@angular/core";
import { PathogenGrowthStageComponent } from "./pathogen-growth-stage.component";
import { ShowDataComponent } from '../create_affecting_ac/show-data/show-data.component';

const routes: Routes = [
  {
    path: "",
    component: IndexPathogenGrowthStageComponent,
    children: [
      {
        path: "edit-pathogen-growth-stage/:id",
        component: CreatePathogenGrowthStageComponent,
      },
      {
        path: "pathogen-growth-stage/:id",
        component: PathogenGrowthStageComponent,
      },
      {
        path: "create-pathogen-growth-stage/:id",
        component: CreatePathogenGrowthStageComponent,
      },
      {
        path:'create-affecting-ac/:id/:Ac',
        component:CreateAffectingAcComponent
      },
      {
        path:'edit-affecting-ac/:id/:pathogen_growth_stage_id',
        component:CreateAffectingAcComponent
      },
      {
        path:'get-affecting-ac/:id/:Ac',
        component:GetAffectingAcComponent
      },
      {
        path:'details-affecting-ac/:id',
        component:ShowDataComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PathogenGrowthStageRoutingModule {}
