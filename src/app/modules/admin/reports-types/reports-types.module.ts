import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReportsTypesRoutingModule } from "./reports-types-routing.module";
import { ReportsTypesIndexComponent } from "./reports-types-index/reports-types-index.component";
import { CreateReportsTypeComponent } from "./create-reports-type/create-reports-type.component";
import { AllReportsTypesComponent } from "./all-reports-types/all-reports-types.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { MaterialModule } from "src/app/core/material-module.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    ReportsTypesIndexComponent,
    CreateReportsTypeComponent,
    AllReportsTypesComponent,
  ],
  imports: [
    CommonModule,
    ReportsTypesRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ReportsTypesModule {}
