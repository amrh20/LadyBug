import { FeedTypessCreateComponent } from './feed-typess-create/feed-typess-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedTypessTableComponent } from './feed-typess-table/feed-typess-table.component';

const routes: Routes = [{
  path:'',
  component:FeedTypessTableComponent
}
,{
  path:'FeedTypesCreate',
  component:FeedTypessCreateComponent
}
,{
  path:'FeedTypesEdit/:id',
  component:FeedTypessCreateComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedTypesRoutingModule { }
