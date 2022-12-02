import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexWrapFarmerComponent } from './index-wrap-farmer/index-wrap-farmer.component';

const routes: Routes = [
  {
    path:'',
    component:IndexWrapFarmerComponent,
    children:[
      {
        path:'TypeOfCultivar',
        loadChildren: () =>
          import("./type-of-cultivar/type-of-cultivar.module").then((m) => m.TypeOfCultivarModule),
        
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmerRoutingModule { }
