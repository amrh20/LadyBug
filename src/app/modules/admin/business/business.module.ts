import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { WorkFieldTableComponent } from './views/WorkField/work-field-table/work-field-table.component';
import { WorkFieldCreateComponent } from './views/WorkField/work-field-create/work-field-create.component';
import { PopupRateComponent } from './views/components/popup-rate/popup-rate.component';
import { IndexBusinessComponent } from './index-business/index-business.component';
import { BusinessTableComponent } from './views/business-table/business-table.component';
import { NgxMultipleSelectModule } from 'ngx-multiple-select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../core/material-module.module';


@NgModule({
  declarations: [
    WorkFieldTableComponent,
    WorkFieldCreateComponent,
    PopupRateComponent,
    IndexBusinessComponent,
    BusinessTableComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMultipleSelectModule,
  ]
})
export class BusinessModule { }
