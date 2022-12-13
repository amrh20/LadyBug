import { ConsultantsDetailsComponent } from './views/consultants-details/consultants-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultantsTableComponent } from './views/consultants-table/consultants-table.component';
import { ConsultantsWrapComponent } from './consultants-wrap/consultants-wrap.component';

const routes: Routes = [
 {
  path:'',
  component:ConsultantsWrapComponent,
  children:[
    {
      path:'',
      component:ConsultantsTableComponent
    },
    {
      path:'Consultants/:id',
      component:ConsultantsDetailsComponent
    },
  ]
 }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultantsRoutingModule { }
