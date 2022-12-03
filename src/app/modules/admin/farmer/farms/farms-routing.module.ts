import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmsTableComponent } from './farms-table/farms-table.component';

const routes: Routes = [
  {
    path:'',
    component:FarmsTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmsRoutingModule { }
