import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FarmsRoutingModule } from "./farms-routing.module";
import { FarmsTableComponent } from "./farms-table/farms-table.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { SharedModule } from "../../../../shared/shared.module";
import { MaterialModule } from "../../../../core/material-module.module";
import { FarmsDetailsComponent } from "./farms-details/farms-details.component";

@NgModule({
  declarations: [FarmsTableComponent, FarmsDetailsComponent],
  imports: [
    CommonModule,
    FarmsRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class FarmsModule {}
