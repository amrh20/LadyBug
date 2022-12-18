import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PathogenGrowthStageRoutingModule } from "./pathogen-growth-stage-routing.module";
import { IndexPathogenGrowthStageComponent } from "./index-pathogen-growth-stage/index-pathogen-growth-stage.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { NgxMultipleSelectModule } from "ngx-multiple-select";
import { MaterialModule } from "src/app/core/material-module.module";
import { SharedModule } from "src/app/shared/shared.module";
import { PathogenGrowthStageComponent } from "./pathogen-growth-stage.component";
import { CreatePathogenGrowthStageComponent } from "./create-pathogen-growth-stage/create-pathogen-growth-stage.component";

@NgModule({
  declarations: [
    IndexPathogenGrowthStageComponent,
    PathogenGrowthStageComponent,
    CreatePathogenGrowthStageComponent,
  ],
  imports: [
    CommonModule,
    PathogenGrowthStageRoutingModule,
    SharedModule,
    MaterialModule,
    NgxMultipleSelectModule,
    ReactiveFormsModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class PathogenGrowthStageModule {}
