import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllAcsComponent } from "../acs/all-acs/all-acs.component";
import { PathogenIndexComponent } from "../pathogen/pathogen-index/pathogen-index.component";
import { AllPathogenTypesComponent } from "./all-pathogen-types/all-pathogen-types.component";
import { CreatePathogenTypeComponent } from "./create-pathogen-type/create-pathogen-type.component";

const routes: Routes = [
  {
    path: "",
    component: PathogenIndexComponent,
    children: [
      { path: "", component: AllPathogenTypesComponent },
      { path: "edit-pathogenType/:id", component: CreatePathogenTypeComponent },
      { path: "create-pathogenType", component: CreatePathogenTypeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PathogenTypeRoutingModule {}
