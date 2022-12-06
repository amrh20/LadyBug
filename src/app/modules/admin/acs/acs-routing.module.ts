import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AcsDetailsComponent } from "./acs-details/acs-details.component";
import { AcsIndexComponent } from "./acs-index/acs-index.component";
import { AllAcsComponent } from "./all-acs/all-acs.component";
import { CreateAcsComponent } from "./create-acs/create-acs.component";

const routes: Routes = [
  {
    path: "",
    component: AcsIndexComponent,
    children: [
      { path: "", component: AllAcsComponent },
      { path: "acs-details/:id", component: AcsDetailsComponent },
      { path: "edit-acs/:id", component: CreateAcsComponent },
      { path: "create-acs", component: CreateAcsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcsRoutingModule {}
