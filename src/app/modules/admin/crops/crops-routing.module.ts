import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFarmedTypeStagesComponent } from './process/create-farmed-type-stages/create-farmed-type-stages.component';
import { WrpaIndexComponent } from './wrpa-index/wrpa-index.component';
import { TableDataComponent } from './informations/table-data/table-data.component';
import { TableDataPocessComponent } from './process/table-data-pocess/table-data-pocess.component';
import { CreatefarmedTypeGinfosComponent } from './informations/createfarmed-type-ginfos/createfarmed-type-ginfos.component';

const routes: Routes = [
  {
    path:'',
    component:WrpaIndexComponent,
    children:[
      {
        path:'',
        redirectTo:'/farmed-type-ginfos',
        pathMatch:'full'
      },
      {
        path:'farmed-type-ginfos',
        component:TableDataComponent
      },
      {
        path:'farmed-type-create',
        component:CreatefarmedTypeGinfosComponent
      },
      {
        path:'farmed-type-edit/:id',
        component:CreatefarmedTypeGinfosComponent
      },
      {
        path:'farmed-type-stages',
        component:TableDataPocessComponent
      },
      {
        path:'farmed-type-stages-create',
        component:CreateFarmedTypeStagesComponent
      },
      {
        path:'farmed-type-stages-edit/:id',
        component:CreateFarmedTypeStagesComponent
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CropsRoutingModule { }
