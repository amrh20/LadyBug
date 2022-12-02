import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmingWaysRoutingModule } from './farming-ways-routing.module';
import { TableFarmingWaysComponent } from './table-farming-ways/table-farming-ways.component';
import { CreateFarmingWaysComponent } from './create-farming-ways/create-farming-ways.component';
import { MaterialModule } from '../../../../core/material-module.module';
import { SharedModule } from '../../../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TableFarmingWaysComponent,
    CreateFarmingWaysComponent
  ],
  imports: [
    CommonModule,
    FarmingWaysRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FarmingWaysModule { }
