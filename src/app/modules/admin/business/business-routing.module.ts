import { RouterModule, Routes } from '@angular/router';

import { BusinessTableComponent } from './views/business-table/business-table.component';
import { IndexBusinessComponent } from './index-business/index-business.component';
import { NgModule } from '@angular/core';
import { ViewOneComponent } from './views/view-one/view-one.component';
import { WorkFieldCreateComponent } from './views/WorkField/work-field-create/work-field-create.component';
import { WorkFieldTableComponent } from './views/WorkField/work-field-table/work-field-table.component';

const routes: Routes = [  {
  path:'',
  component:IndexBusinessComponent,
  children:[
    {
      path:'',
      redirectTo:'/IndexBusiness',
      pathMatch:'full'
    },
    { path: 'IndexBusiness', component: BusinessTableComponent },
    { path: 'profile/:id', component: ViewOneComponent },
    { path: 'WorkField', component: WorkFieldTableComponent },
    { path: 'edit-WorkField/:id', component: WorkFieldCreateComponent },
    { path: 'create-WorkField', component:  WorkFieldCreateComponent},
  
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
