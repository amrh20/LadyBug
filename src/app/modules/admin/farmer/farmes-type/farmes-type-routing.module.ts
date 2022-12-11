import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FarmesTypeTableComponent } from "./farmes-type-table/farmes-type-table.component";
import { FarmesTypeCreateComponent } from "./farmes-type-create/farmes-type-create.component";
import { FarmesTypeDetailsComponent } from "./farmes-type-details/farmes-type-details.component";
import { FarmedTypeNutValsTableComponent } from "./farmes-type-table/views/farmed_type_nut_vals/farmed-type-nut-vals-table/farmed-type-nut-vals-table.component";
import { FarmedTypeExtrasTableComponent } from "./farmes-type-table/views/farmed_type_extras/farmed-type-extras-table/farmed-type-extras-table.component";
import { TaxonomiesTableComponent } from "./farmes-type-table/views/taxonomies/taxonomies-table/taxonomies-table.component";
import { TaxonomiesCreateComponent } from "./farmes-type-table/views/taxonomies/taxonomies-create/taxonomies-create.component";
import { TaxonomiesDetailsComponent } from "./farmes-type-table/views/taxonomies/taxonomies-details/taxonomies-details.component";
import { FarmedTypeNutValsCreateComponent } from "./farmes-type-table/views/farmed_type_nut_vals/farmed-type-nut-vals-create/farmed-type-nut-vals-create.component";
import { FarmedTypeNutValsDetalisComponent } from "./farmes-type-table/views/farmed_type_nut_vals/farmed-type-nut-vals-detalis/farmed-type-nut-vals-detalis.component";
import { MarketingDatasDetailsComponent } from "./farmes-type-table/views/marketing_datas/marketing-datas-details/marketing-datas-details.component";
import { MarketingDatasTableComponent } from "./farmes-type-table/views/marketing_datas/marketing-datas-table/marketing-datas-table.component";
import { MarketingDatasCreateComponent } from "./farmes-type-table/views/marketing_datas/marketing-datas-create/marketing-datas-create.component";
import { FertilizationNeedsTableComponent } from "./farmes-type-table/views/fertilization_needs/fertilization-needs-table/fertilization-needs-table.component";
import { FertilizationNeedsCreateComponent } from "./farmes-type-table/views/fertilization_needs/fertilization-needs-create/fertilization-needs-create.component";
import { FertilizationNeedsDetailsComponent } from "./farmes-type-table/views/fertilization_needs/fertilization-needs-details/fertilization-needs-details.component";
import { CountriesFaremdComponent } from './farmes-type-table/views/CountriesFaremd/countries-faremd/countries-faremd.component';
import { CountriesCreateComponent } from './farmes-type-table/views/CountriesFaremd/countries-create/countries-create.component';
import { NamesCountriesTableComponent } from './farmes-type-table/views/names_countries/names-countries-table/names-countries-table.component';
import { NamesCountriesCreateComponent } from './farmes-type-table/views/names_countries/names-countries-create/names-countries-create.component';

const routes: Routes = [
  {
    path: "",
    component: FarmesTypeTableComponent,
  },
  {
    path: "FarmersTypeCreate",
    component: FarmesTypeCreateComponent,
  },
  {
    path: "FarmersTypeDetails/:id",
    component: FarmesTypeDetailsComponent,
  },
  {
    path: "FarmersTypeEdit/:id",
    component: FarmesTypeCreateComponent,
  },
  {
    path: "taxonomies/:id",
    component: TaxonomiesTableComponent,
  },
  {
    path: "taxonomies/Create/:id",
    component: TaxonomiesCreateComponent,
  },
  {
    path: "taxonomies/edit/:id",
    component: TaxonomiesCreateComponent,
  },
  {
    path: "taxonomies/details/:id",
    component: TaxonomiesDetailsComponent,
  },

  {
    path: "fertilization-needs/:id",
    component: FertilizationNeedsTableComponent,
  },
  {
    path: "fertilization-needs/Create/:id",
    component: FertilizationNeedsCreateComponent,
  },
  {
    path: "fertilization-needs/edit/:id",
    component: FertilizationNeedsCreateComponent,
  },
  {
    path: "fertilization-needs/details/:id",
    component: FertilizationNeedsDetailsComponent,
  },
  {
    path: "marketing-datas/:id",
    component: MarketingDatasTableComponent,
  },
  {
    path: "marketing-datas/Create/:id",
    component: MarketingDatasCreateComponent,
  },
  {
    path: "marketing-datas/edit/:id",
    component: MarketingDatasCreateComponent,
  },
  {
    path: "marketing-datas/details/:id",
    component: MarketingDatasDetailsComponent,
  },
  {
    path: "farmed_type_extras/:id",
    component: FarmedTypeExtrasTableComponent,
  },

  {
    path: "farmed_type_nut_vals/:id",
    component: FarmedTypeNutValsTableComponent,
  },
  {
    path: "farmed_type_nut_vals/Create/:id",
    component: FarmedTypeNutValsCreateComponent,
  },
  {
    path: "farmed_type_nut_vals/edit/:id",
    component: FarmedTypeNutValsCreateComponent,
  },
  {
    path: "farmed_type_nut_vals/details/:id",
    component: FarmedTypeNutValsDetalisComponent,
  },
  {
    path: "CountriesFaremd/:id",
    component: CountriesFaremdComponent,
  },
  {
    path: "CountriesFaremd/edit/:id",
    component: CountriesCreateComponent,
  },
  {
    path: "CountriesFaremd/details/:id",
    component: FarmedTypeNutValsDetalisComponent,
  },
  {
    path: "CountriesFaremd/Create/:id",
    component: CountriesCreateComponent,
  },
  {
    path: "names_countries/:id",
    component: NamesCountriesTableComponent,
  },
  {
    path: "names_countries/edit/:id",
    component: NamesCountriesCreateComponent,
  },
  {
    path: "names_countries/details/:id",
    component: NamesCountriesCreateComponent,
  },
  {
    path: "names_countries/Create/:id",
    component: NamesCountriesCreateComponent,
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmesTypeRoutingModule {}
