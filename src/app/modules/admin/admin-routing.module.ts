import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path:'',
    component:IndexComponent,
    children:[
      { path: 'general-uers', loadChildren: () => import('./general-users/general-users.module').then(m => m.GeneralUsersModule) },
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
