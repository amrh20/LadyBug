import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmesTypeTableComponent } from './farmes-type-table/farmes-type-table.component';
import { FarmesTypeCreateComponent } from './farmes-type-create/farmes-type-create.component';
import { FarmesTypeDetailsComponent } from './farmes-type-details/farmes-type-details.component';
import { FarmedTypeNutValsTableComponent } from './farmes-type-table/views/farmed_type_nut_vals/farmed-type-nut-vals-table/farmed-type-nut-vals-table.component';
import { FarmedTypeExtrasTableComponent } from './farmes-type-table/views/farmed_type_extras/farmed-type-extras-table/farmed-type-extras-table.component';
import { TaxonomiesTableComponent } from './farmes-type-table/views/taxonomies/taxonomies-table/taxonomies-table.component';
import { TaxonomiesCreateComponent } from './farmes-type-table/views/taxonomies/taxonomies-create/taxonomies-create.component';

const routes: Routes = [{
  path:'',
  component:FarmesTypeTableComponent
}
,{
  path:'FarmersTypeCreate',
  component:FarmesTypeCreateComponent
}
,{
  path:'FarmersTypeDetails/:id',
  component:FarmesTypeDetailsComponent
}
,{
  path:'FarmersTypeEdit/:id',
  component:FarmesTypeCreateComponent
},
{
  path:'taxonomies/:id',
  component:TaxonomiesTableComponent
},
{
  // 
  path:'taxonomies/Create/:id',
  component:TaxonomiesCreateComponent

}
,{
  path:'farmed_type_extras/:id',
  component:FarmedTypeExtrasTableComponent
}

,{
  path:'farmed_type_nut_vals/:id',
  component:FarmedTypeNutValsTableComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmesTypeRoutingModule { }
