import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoilTypesRoutingModule } from './soil-types-routing.module';
import { SoilTypesTableComponent } from './soil-types-table/soil-types-table.component';
import { SoilTypesCreateComponent } from './soil-types-create/soil-types-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../../../shared/shared.module';
import { MaterialModule } from '../../../../core/material-module.module';


@NgModule({
  declarations: [
    SoilTypesTableComponent,
    SoilTypesCreateComponent
  ],
  imports: [
    CommonModule,
    SoilTypesRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SoilTypesModule { }
