import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiseasesRoutingModule } from './diseases-routing.module';
import { DiseasesTableComponent } from './pages/diseases/diseases-table/diseases-table.component';
import { DiseasesCreateComponent } from './pages/diseases/diseases-create/diseases-create.component';
import { DiseasesDetailsComponent } from './pages/diseases/diseases-details/diseases-details.component';
import { InfectionRatesTableComponent } from './pages/infection_rates/infection-rates-table/infection-rates-table.component';
import { InfectionRatesCreateComponent } from './pages/infection_rates/infection-rates-create/infection-rates-create.component';
import { IndexDiseasesComponent } from './index-diseases/index-diseases.component';
import { NgxMultipleSelectModule } from 'ngx-multiple-select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../core/material-module.module';
import { DiseaseRegistrationsTableComponent } from './pages/disease_registrations/disease-registrations-table/disease-registrations-table.component';
import { DiseaseRegistrationsViewComponent } from './pages/disease_registrations/disease-registrations-view/disease-registrations-view.component';
import { UpdateDiseaseRegistrationsComponent } from './pages/disease_registrations/update-disease-registrations/update-disease-registrations.component';
import { DiseaseCausativeComponent } from './DiseaseCausative/disease-causative/disease-causative.component';
import { CreateDiseaseCausativeComponent } from './DiseaseCausative/create-disease-causative/create-disease-causative.component';


@NgModule({
  declarations: [
    DiseasesTableComponent,
    DiseasesCreateComponent,
    DiseasesDetailsComponent,
    InfectionRatesTableComponent,
    InfectionRatesCreateComponent,
    IndexDiseasesComponent,
    DiseaseRegistrationsTableComponent,
    DiseaseRegistrationsViewComponent,
    UpdateDiseaseRegistrationsComponent,
    DiseaseCausativeComponent,
    CreateDiseaseCausativeComponent
  ],
  imports: [
    CommonModule,
    DiseasesRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMultipleSelectModule,
  ]
})
export class DiseasesModule { }
