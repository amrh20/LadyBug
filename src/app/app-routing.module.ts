import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  {
    path:'',
    redirectTo:'/Admin',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'/Admin',
    pathMatch:'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
