import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessTableComponent } from './views/business-table/business-table.component';
import { CommonModule } from '@angular/common';
import { IndexBusinessComponent } from './index-business/index-business.component';
import { MaterialModule } from '../../../core/material-module.module';
import { NgModule } from '@angular/core';
import { NgxInputStarRatingModule } from '@ngx-lite/input-star-rating';
import { NgxMultipleSelectModule } from 'ngx-multiple-select';
import { PopupRateComponent } from './views/components/popup-rate/popup-rate.component';
import { SharedModule } from '../../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { WorkFieldCreateComponent } from './views/WorkField/work-field-create/work-field-create.component';
import { WorkFieldTableComponent } from './views/WorkField/work-field-table/work-field-table.component';
import { ViewOneComponent } from './views/view-one/view-one.component';

@NgModule({
  declarations: [
    WorkFieldTableComponent,
    WorkFieldCreateComponent,
    PopupRateComponent,
    IndexBusinessComponent,
    BusinessTableComponent,
    ViewOneComponent
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
    NgxInputStarRatingModule
  ]
})
export class BusinessModule { }
