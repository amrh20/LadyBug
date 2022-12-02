import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IrrigationMethodsTableComponent } from './irrigation-methods-table/irrigation-methods-table.component';
import { IrrigationMethodsCreateComponent } from './irrigation-methods-create/irrigation-methods-create.component';

const routes: Routes = [{
  path:'',
  component:IrrigationMethodsTableComponent
}
,{
  path:'IrrigationMethodsCreate',
  component:IrrigationMethodsCreateComponent
}
,{
  path:'IrrigationMethodsEdit/:id',
  component:IrrigationMethodsCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IrrigationMethodsRoutingModule { }
