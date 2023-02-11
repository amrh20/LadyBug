import { RouterModule, Routes } from '@angular/router';

import { CrateFertilizersComponent } from './crate-fertilizers/crate-fertilizers.component';
import { DetailsFertilizersComponent } from './details-fertilizers/details-fertilizers.component';
import { IndexFertilizersComponent } from './index-fertilizers/index-fertilizers.component';
import { NgModule } from '@angular/core';
import { TableFertilizersComponent } from './table-fertilizers/table-fertilizers.component';

const routes: Routes = [
  {
    path: "",
    component: IndexFertilizersComponent,
    children: [
      {
        path: "",
        redirectTo: "indexFertilizers",
        pathMatch: "full",
      },
      { path: "indexFertilizers", component: TableFertilizersComponent },
      { path: "edit-Fertilizers/:id", component: CrateFertilizersComponent },
      { path: "create-Fertilizers", component: CrateFertilizersComponent },
      { path: "Fertilizers-details/:id", component: DetailsFertilizersComponent },
  
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FertilizersRoutingModule { }
