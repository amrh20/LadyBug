import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmesTypeTableComponent } from './farmes-type-table/farmes-type-table.component';
import { FarmesTypeCreateComponent } from './farmes-type-create/farmes-type-create.component';
import { FarmesTypeDetailsComponent } from './farmes-type-details/farmes-type-details.component';

const routes: Routes = [{
  path:'',
  component:FarmesTypeTableComponent
}
,{
  path:'FarmersTypeCreate',
  component:FarmesTypeCreateComponent
}
,{
  path:'FarmersTypeDetails/:id',
  component:FarmesTypeDetailsComponent
}
,{
  path:'FarmersTypeEdit/:id',
  component:FarmesTypeCreateComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmesTypeRoutingModule { }
