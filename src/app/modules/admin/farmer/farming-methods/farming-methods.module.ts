import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmingMethodsRoutingModule } from './farming-methods-routing.module';
import { FarmingMethodsTableComponent } from './farming-methods-table/farming-methods-table.component';
import { FarmingMethodsCreateComponent } from './farming-methods-create/farming-methods-create.component';
import { MaterialModule } from '../../../../core/material-module.module';
import { SharedModule } from '../../../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FarmingMethodsTableComponent,
    FarmingMethodsCreateComponent
  ],
  imports: [
    CommonModule,
    FarmingMethodsRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FarmingMethodsModule { }
