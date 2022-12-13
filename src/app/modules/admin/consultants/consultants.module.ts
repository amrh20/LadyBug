import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultantsRoutingModule } from './consultants-routing.module';
import { ConsultantsTableComponent } from './views/consultants-table/consultants-table.component';
import { ConsultantsDetailsComponent } from './views/consultants-details/consultants-details.component';
import { ConsultantsWrapComponent } from './consultants-wrap/consultants-wrap.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMultipleSelectModule } from 'ngx-multiple-select';
import { MaterialModule } from '../../../core/material-module.module';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    ConsultantsTableComponent,
    ConsultantsDetailsComponent,
    ConsultantsWrapComponent
  ],
  imports: [
    CommonModule,
    ConsultantsRoutingModule,
    SharedModule,
    MaterialModule,
    NgxMultipleSelectModule,
    ReactiveFormsModule,
    TranslateModule,
  ]
})
export class ConsultantsModule { }
