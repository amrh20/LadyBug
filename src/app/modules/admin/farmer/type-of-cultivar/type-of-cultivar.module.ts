import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeOfCultivarRoutingModule } from './type-of-cultivar-routing.module';
import { TableTypeComponent } from './table-type/table-type.component';
import { CreateTypeComponent } from './create-type/create-type.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../../../shared/shared.module';
import { MaterialModule } from '../../../../core/material-module.module';


@NgModule({
  declarations: [
    TableTypeComponent,
    CreateTypeComponent
  ],
  imports: [
    CommonModule,
    TypeOfCultivarRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TypeOfCultivarModule { }
