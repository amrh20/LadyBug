import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AcidityTypesRoutingModule } from "./acidity-types-routing.module";
import { MaterialModule } from "src/app/core/material-module.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { SharedModule } from "src/app/shared/shared.module";
import { CreateAcidityTypesComponent } from "./create-acidity-types/create-acidity-types.component";
import { TableAcidityTypesComponent } from "./table-acidity-types/table-acidity-types.component";

@NgModule({
  declarations: [TableAcidityTypesComponent, CreateAcidityTypesComponent],
  imports: [
    CommonModule,
    AcidityTypesRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AcidityTypesModule {}
