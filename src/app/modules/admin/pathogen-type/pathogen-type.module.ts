import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PathogenTypeRoutingModule } from "./pathogen-type-routing.module";
import { AllPathogenTypesComponent } from "./all-pathogen-types/all-pathogen-types.component";
import { PathogenIndexComponent } from "./pathogen-index/pathogen-index.component";
import { ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { NgxMultipleSelectModule } from "ngx-multiple-select";
import { MaterialModule } from "src/app/core/material-module.module";
import { SharedModule } from "src/app/shared/shared.module";
import { CreatePathogenTypeComponent } from './create-pathogen-type/create-pathogen-type.component';

@NgModule({
  declarations: [AllPathogenTypesComponent, PathogenIndexComponent, CreatePathogenTypeComponent],
  imports: [
    CommonModule,
    PathogenTypeRoutingModule,
    SharedModule,
    MaterialModule,
    NgxMultipleSelectModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
})
export class PathogenTypeModule {}
