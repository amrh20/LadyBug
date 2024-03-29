import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FarmesTypeRoutingModule } from "./farmes-type-routing.module";
import { FarmesTypeTableComponent } from "./farmes-type-table/farmes-type-table.component";
import { FarmesTypeCreateComponent } from "./farmes-type-create/farmes-type-create.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { SharedModule } from "../../../../shared/shared.module";
import { MaterialModule } from "../../../../core/material-module.module";
import { FarmesTypeDetailsComponent } from "./farmes-type-details/farmes-type-details.component";
import { FarmedTypeExtrasTableComponent } from "./farmes-type-table/views/farmed_type_extras/farmed-type-extras-table/farmed-type-extras-table.component";
import { FarmedTypeExtrasCreateComponent } from "./farmes-type-table/views/farmed_type_extras/farmed-type-extras-create/farmed-type-extras-create.component";
import { FarmedTypeExtrasDetasilComponent } from "./farmes-type-table/views/farmed_type_extras/farmed-type-extras-detasil/farmed-type-extras-detasil.component";
import { TaxonomiesCreateComponent } from "./farmes-type-table/views/taxonomies/taxonomies-create/taxonomies-create.component";
import { TaxonomiesTableComponent } from "./farmes-type-table/views/taxonomies/taxonomies-table/taxonomies-table.component";
import { TaxonomiesDetailsComponent } from "./farmes-type-table/views/taxonomies/taxonomies-details/taxonomies-details.component";
import { FarmedTypeNutValsTableComponent } from "./farmes-type-table/views/farmed_type_nut_vals/farmed-type-nut-vals-table/farmed-type-nut-vals-table.component";
import { FarmedTypeNutValsCreateComponent } from "./farmes-type-table/views/farmed_type_nut_vals/farmed-type-nut-vals-create/farmed-type-nut-vals-create.component";
import { FarmedTypeNutValsDetalisComponent } from "./farmes-type-table/views/farmed_type_nut_vals/farmed-type-nut-vals-detalis/farmed-type-nut-vals-detalis.component";
import { MarketingDatasCreateComponent } from "./farmes-type-table/views/marketing_datas/marketing-datas-create/marketing-datas-create.component";
import { MarketingDatasTableComponent } from "./farmes-type-table/views/marketing_datas/marketing-datas-table/marketing-datas-table.component";
import { MarketingDatasDetailsComponent } from "./farmes-type-table/views/marketing_datas/marketing-datas-details/marketing-datas-details.component";
import { FertilizationNeedsCreateComponent } from "./farmes-type-table/views/fertilization_needs/fertilization-needs-create/fertilization-needs-create.component";
import { FertilizationNeedsDetailsComponent } from "./farmes-type-table/views/fertilization_needs/fertilization-needs-details/fertilization-needs-details.component";
import { FertilizationNeedsTableComponent } from "./farmes-type-table/views/fertilization_needs/fertilization-needs-table/fertilization-needs-table.component";
import { NgxMultipleSelectModule } from "ngx-multiple-select";
import { CountriesCreateComponent } from './farmes-type-table/views/CountriesFaremd/countries-create/countries-create.component';
import { CountriesFaremdComponent } from './farmes-type-table/views/CountriesFaremd/countries-faremd/countries-faremd.component';
import { NamesCountriesTableComponent } from './farmes-type-table/views/names_countries/names-countries-table/names-countries-table.component';
import { NamesCountriesCreateComponent } from './farmes-type-table/views/names_countries/names-countries-create/names-countries-create.component';
import { DivvPipe } from './farmes-type-table/views/names_countries/names-countries-create/divv.pipe';
import { ResistantDiseasesComponent } from './farmes-type-table/views/resistant-diseases/resistant-diseases.component';
import { CreateResistantDiseasesComponent } from './farmes-type-table/views/resistant-diseases/create-resistant-diseases/create-resistant-diseases.component';
import { SensitiveDiseaseTableComponent } from './farmes-type-table/views/sensitive-disease-table/sensitive-disease-table.component';
import { CreateSensitiveDiseasesComponent } from './farmes-type-table/views/sensitive-disease-table/create-sensitive-diseases/create-sensitive-diseases.component';
import { SensitiveDiseaseDetailsComponent } from './farmes-type-table/views/sensitive-disease-table/sensitive-disease-details/sensitive-disease-details.component';

@NgModule({
  declarations: [
    FarmesTypeTableComponent,
    FarmesTypeCreateComponent,
    FarmesTypeDetailsComponent,
    FarmedTypeExtrasTableComponent,
    FarmedTypeExtrasCreateComponent,
    FarmedTypeExtrasDetasilComponent,
    TaxonomiesCreateComponent,
    TaxonomiesTableComponent,
    TaxonomiesDetailsComponent,
    FarmedTypeNutValsTableComponent,
    FarmedTypeNutValsCreateComponent,
    FarmedTypeNutValsDetalisComponent,
    MarketingDatasCreateComponent,
    MarketingDatasTableComponent,
    MarketingDatasDetailsComponent,
    FertilizationNeedsCreateComponent,
    FertilizationNeedsDetailsComponent,
    FertilizationNeedsTableComponent,
    CountriesCreateComponent,
    CountriesFaremdComponent,
    NamesCountriesTableComponent,
    NamesCountriesCreateComponent,
    DivvPipe,
    ResistantDiseasesComponent,
    CreateResistantDiseasesComponent,
    SensitiveDiseaseTableComponent,
    CreateSensitiveDiseasesComponent,
    SensitiveDiseaseDetailsComponent
  ],
  imports: [
    CommonModule,
    FarmesTypeRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMultipleSelectModule
  ]

})
export class FarmesTypeModule {}
