import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ChemicalFertilizerSourcesRoutingModule } from "./chemical-fertilizer-sources-routing.module";
import { TableChemicalFertilizerSourcesComponent } from "./table-chemical-fertilizer-sources/table-chemical-fertilizer-sources.component";
import { CreateChemicalFertilizerSourcesComponent } from "./create-chemical-fertilizer-sources/create-chemical-fertilizer-sources.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { MaterialModule } from "src/app/core/material-module.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    TableChemicalFertilizerSourcesComponent,
    CreateChemicalFertilizerSourcesComponent,
  ],
  imports: [
    CommonModule,
    ChemicalFertilizerSourcesRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ChemicalFertilizerSourcesModule {}
