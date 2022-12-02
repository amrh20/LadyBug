import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IrrigationMethodsRoutingModule } from './irrigation-methods-routing.module';
import { IrrigationMethodsCreateComponent } from './irrigation-methods-create/irrigation-methods-create.component';
import { IrrigationMethodsTableComponent } from './irrigation-methods-table/irrigation-methods-table.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../../../shared/shared.module';
import { MaterialModule } from '../../../../core/material-module.module';


@NgModule({
  declarations: [
    IrrigationMethodsCreateComponent,
    IrrigationMethodsTableComponent
  ],
  imports: [
    CommonModule,
    IrrigationMethodsRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class IrrigationMethodsModule { }
