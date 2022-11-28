import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MeasuringUnitsRoutingModule } from "./measuring-units-routing.module";
import { CreateMeasuringUnitsComponent } from "./create-measuring-units/create-measuring-units.component";
import { AllMeasuringUnitsComponent } from "./all-measuring-units/all-measuring-units.component";
import { MeasuringUnitsIndexComponent } from "./measuring-units-index/measuring-units-index.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { MaterialModule } from "src/app/core/material-module.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    CreateMeasuringUnitsComponent,
    AllMeasuringUnitsComponent,
    MeasuringUnitsIndexComponent,
  ],
  imports: [
    CommonModule,
    MeasuringUnitsRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class MeasuringUnitsModule {}
