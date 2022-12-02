import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PlantPotRoutingModule } from "./plant-pot-routing.module";
import { CeatePlantPotComponent } from "./ceate-plant-pot/ceate-plant-pot.component";
import { TablePlantPotComponent } from "./table-plant-pot/table-plant-pot.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { MaterialModule } from "src/app/core/material-module.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [CeatePlantPotComponent, TablePlantPotComponent],
  imports: [
    CommonModule,
    PlantPotRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PlantPotModule {}
