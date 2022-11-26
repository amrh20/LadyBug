import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoginGuard } from './core/guards/is-login.guard';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) ,
  canLoad:[IsLoginGuard]
},
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
