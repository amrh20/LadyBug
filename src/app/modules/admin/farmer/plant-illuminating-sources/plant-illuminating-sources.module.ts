import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PlantIlluminatingSourcesRoutingModule } from "./plant-illuminating-sources-routing.module";
import { CreatePlantSourcesComponent } from "./create-plant-sources/create-plant-sources.component";
import { TablePlantSourcesComponent } from "./table-plant-sources/table-plant-sources.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { MaterialModule } from "src/app/core/material-module.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [CreatePlantSourcesComponent, TablePlantSourcesComponent],
  imports: [
    CommonModule,
    PlantIlluminatingSourcesRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PlantIlluminatingSourcesModule {}
