import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypesSaltsRoutingModule } from './types-salts-routing.module';
import { TypesSaltsCreateComponent } from './types-salts-create/types-salts-create.component';
import { TypesSaltsTableComponent } from './types-salts-table/types-salts-table.component';
import { MaterialModule } from '../../../../core/material-module.module';
import { SharedModule } from '../../../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TypesSaltsCreateComponent,
    TypesSaltsTableComponent
  ],
  imports: [
    CommonModule,
    TypesSaltsRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TypesSaltsModule { }
