import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FarmsDetailsComponent } from "./farms-details/farms-details.component";
import { FarmsTableComponent } from "./farms-table/farms-table.component";

const routes: Routes = [
  {
    path: "",
    component: FarmsTableComponent,
  },
  {
    path: "farms-details/:id",
    component: FarmsDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmsRoutingModule {}
