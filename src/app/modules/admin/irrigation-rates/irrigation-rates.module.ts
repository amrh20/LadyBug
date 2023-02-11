import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IrrigationRatesRoutingModule } from "./irrigation-rates-routing.module";
import { IrrigationRatesIndexComponent } from "./irrigation-rates-index/irrigation-rates-index.component";
import { IrrigationRatesTableComponent } from "./irrigation-rates-table/irrigation-rates-table.component";
import { CreateIrrigationRatesComponent } from "./create-irrigation-rates/create-irrigation-rates.component";
import { ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { NgxMultipleSelectModule } from "ngx-multiple-select";
import { MaterialModule } from "src/app/core/material-module.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    IrrigationRatesIndexComponent,
    IrrigationRatesTableComponent,
    CreateIrrigationRatesComponent,
  ],
  imports: [
    CommonModule,
    IrrigationRatesRoutingModule,
    SharedModule,
    MaterialModule,
    NgxMultipleSelectModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
})
export class IrrigationRatesModule {}
