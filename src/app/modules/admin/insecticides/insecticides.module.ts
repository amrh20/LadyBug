import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsecticidesRoutingModule } from './insecticides-routing.module';
import { CreateInsecticidesComponent } from './views/create-insecticides/create-insecticides.component';
import { TableInsecticidesComponent } from './views/table-insecticides/table-insecticides.component';
import { InsecticidesIndexComponent } from './components/insecticides-index/insecticides-index.component';
import { DetailsInsecticidesComponent } from './views/details-insecticides/details-insecticides.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../core/material-module.module';
import { NgxMultipleSelectModule } from 'ngx-multiple-select';


@NgModule({
  declarations: [
    CreateInsecticidesComponent,
    TableInsecticidesComponent,
    InsecticidesIndexComponent,
    DetailsInsecticidesComponent
  ],
  imports: [
    CommonModule,
    InsecticidesRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMultipleSelectModule,

  ]
})
export class InsecticidesModule { }
