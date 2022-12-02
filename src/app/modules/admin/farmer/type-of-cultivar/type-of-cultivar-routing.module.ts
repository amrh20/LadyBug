import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableTypeComponent } from './table-type/table-type.component';
import { CreateTypeComponent } from './create-type/create-type.component';

const routes: Routes = [
  {
    path:'',
    component:TableTypeComponent
  }
  ,{
    path:'crateTypeCultivar',
    component:CreateTypeComponent
  }
  ,{
    path:'editTypeCultivar/:id',
    component:CreateTypeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeOfCultivarRoutingModule { }
