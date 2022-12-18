import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PathogenRoutingModule } from "./pathogen-routing.module";
import { AllPathogensComponent } from "./all-pathogens/all-pathogens.component";
import { CreatePathogenComponent } from "./create-pathogen/create-pathogen.component";
import { PathogenIndexComponent } from "./pathogen-index/pathogen-index.component";
import { ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { NgxMultipleSelectModule } from "ngx-multiple-select";
import { MaterialModule } from "src/app/core/material-module.module";
import { SharedModule } from "src/app/shared/shared.module";
import { PathogenDetailsComponent } from "./pathogen-details/pathogen-details.component";

@NgModule({
  declarations: [
    AllPathogensComponent,
    CreatePathogenComponent,
    PathogenIndexComponent,
    PathogenDetailsComponent,
  ],
  imports: [
    CommonModule,
    PathogenRoutingModule,
    SharedModule,
    MaterialModule,
    NgxMultipleSelectModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
})
export class PathogenModule {}
