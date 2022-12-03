import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmesTypeRoutingModule } from './farmes-type-routing.module';
import { FarmesTypeTableComponent } from './farmes-type-table/farmes-type-table.component';
import { FarmesTypeCreateComponent } from './farmes-type-create/farmes-type-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../../../shared/shared.module';
import { MaterialModule } from '../../../../core/material-module.module';
import { FarmesTypeDetailsComponent } from './farmes-type-details/farmes-type-details.component';


@NgModule({
  declarations: [
    FarmesTypeTableComponent,
    FarmesTypeCreateComponent,
    FarmesTypeDetailsComponent
  ],
  imports: [
    CommonModule,
    FarmesTypeRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FarmesTypeModule { }
