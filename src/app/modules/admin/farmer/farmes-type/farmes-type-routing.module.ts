import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmesTypeTableComponent } from './farmes-type-table/farmes-type-table.component';
import { FarmesTypeCreateComponent } from './farmes-type-create/farmes-type-create.component';
import { FarmesTypeDetailsComponent } from './farmes-type-details/farmes-type-details.component';
import { FarmedTypeNutValsTableComponent } from './farmes-type-table/views/farmed_type_nut_vals/farmed-type-nut-vals-table/farmed-type-nut-vals-table.component';
import { FarmedTypeExtrasTableComponent } from './farmes-type-table/views/farmed_type_extras/farmed-type-extras-table/farmed-type-extras-table.component';
import { TaxonomiesTableComponent } from './farmes-type-table/views/taxonomies/taxonomies-table/taxonomies-table.component';
import { TaxonomiesCreateComponent } from './farmes-type-table/views/taxonomies/taxonomies-create/taxonomies-create.component';
import { TaxonomiesDetailsComponent } from './farmes-type-table/views/taxonomies/taxonomies-details/taxonomies-details.component';
import { FarmedTypeNutValsCreateComponent } from './farmes-type-table/views/farmed_type_nut_vals/farmed-type-nut-vals-create/farmed-type-nut-vals-create.component';
import { FarmedTypeNutValsDetalisComponent } from './farmes-type-table/views/farmed_type_nut_vals/farmed-type-nut-vals-detalis/farmed-type-nut-vals-detalis.component';

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
  path:'taxonomies/Create/:id',
  component:TaxonomiesCreateComponent
},
{
  path:'taxonomies/edit/:id',
  component:TaxonomiesCreateComponent
},
{
  path:'taxonomies/details/:id',
  component:TaxonomiesDetailsComponent
}
,{
  path:'farmed_type_extras/:id',
  component:FarmedTypeExtrasTableComponent
}

,{
  path:'farmed_type_nut_vals/:id',
  component:FarmedTypeNutValsTableComponent
},{
  path:'farmed_type_nut_vals/Create/:id',
  component:FarmedTypeNutValsCreateComponent
},
{
  path:'farmed_type_nut_vals/edit/:id',
  component:FarmedTypeNutValsCreateComponent
},
{
  path:'farmed_type_nut_vals/details/:id',
  component:FarmedTypeNutValsDetalisComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmesTypeRoutingModule { }
