import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypesSaltsTableComponent } from './types-salts-table/types-salts-table.component';
import { TypesSaltsCreateComponent } from './types-salts-create/types-salts-create.component';

const routes: Routes = [{
  path:'',
  component:TypesSaltsTableComponent
}
,{
  path:'TypesSaltsCreate',
  component:TypesSaltsCreateComponent
}
,{
  path:'TypesSaltsEdit/:id',
  component:TypesSaltsCreateComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypesSaltsRoutingModule { }
