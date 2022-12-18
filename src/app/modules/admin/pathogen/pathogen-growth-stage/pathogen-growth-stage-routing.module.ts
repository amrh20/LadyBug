import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreatePathogenGrowthStageComponent } from "./create-pathogen-growth-stage/create-pathogen-growth-stage.component";
import { IndexPathogenGrowthStageComponent } from "./index-pathogen-growth-stage/index-pathogen-growth-stage.component";
import { PathogenGrowthStageComponent } from "./pathogen-growth-stage.component";

const routes: Routes = [
  {
    path: "",
    component: IndexPathogenGrowthStageComponent,
    children: [
      {
        path: "edit-pathogen/:id",
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PathogenGrowthStageRoutingModule {}
