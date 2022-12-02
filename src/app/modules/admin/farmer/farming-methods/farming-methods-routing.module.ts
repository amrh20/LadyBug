import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmingMethodsTableComponent } from './farming-methods-table/farming-methods-table.component';
import { FarmingMethodsCreateComponent } from './farming-methods-create/farming-methods-create.component';

const routes: Routes = [
  {
    path:'',
    component:FarmingMethodsTableComponent
  }
  ,{
    path:'createFarmingMethods',
    component:FarmingMethodsCreateComponent
  }
  ,{
    path:'editFarmingMethods/:id',
    component:FarmingMethodsCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmingMethodsRoutingModule { }
