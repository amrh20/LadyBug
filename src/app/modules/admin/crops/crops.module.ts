import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CropsRoutingModule } from './crops-routing.module';
import { TableDataComponent } from './informations/table-data/table-data.component';
import { CreatefarmedTypeGinfosComponent } from './informations/createfarmed-type-ginfos/createfarmed-type-ginfos.component';
import { TableDataPocessComponent } from './process/table-data-pocess/table-data-pocess.component';
import { CreateFarmedTypeStagesComponent } from './process/create-farmed-type-stages/create-farmed-type-stages.component';
import { WrpaIndexComponent } from './wrpa-index/wrpa-index.component';
import { MaterialModule } from '../../../core/material-module.module';
import { SharedModule } from '../../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TableDataComponent,
    CreatefarmedTypeGinfosComponent,
    TableDataPocessComponent,
    CreateFarmedTypeStagesComponent,
    WrpaIndexComponent
  ],
  imports: [
    CommonModule,
    CropsRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CropsModule { }
