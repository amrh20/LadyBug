import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableFarmingWaysComponent } from './table-farming-ways/table-farming-ways.component';
import { CreateFarmingWaysComponent } from './create-farming-ways/create-farming-ways.component';

const routes: Routes = [  {
  path:'',
  component:TableFarmingWaysComponent
}
,{
  path:'crateFarmingWays',
  component:CreateFarmingWaysComponent
}
,{
  path:'editFarmingWays/:id',
  component:CreateFarmingWaysComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmingWaysRoutingModule { }
