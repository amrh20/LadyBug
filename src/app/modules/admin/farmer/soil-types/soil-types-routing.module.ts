import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoilTypesTableComponent } from './soil-types-table/soil-types-table.component';
import { SoilTypesCreateComponent } from './soil-types-create/soil-types-create.component';

const routes: Routes = [{
  path:'',
  component:SoilTypesTableComponent
}
,{
  path:'SoilTypesCreate',
  component:SoilTypesCreateComponent
}
,{
  path:'SoilTypesEdit/:id',
  component:SoilTypesCreateComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoilTypesRoutingModule { }
