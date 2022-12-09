import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AcsRoutingModule } from "./acs-routing.module";
import { AcsDetailsComponent } from "./acs-details/acs-details.component";
import { AcsIndexComponent } from "./acs-index/acs-index.component";
import { CreateAcsComponent } from "./create-acs/create-acs.component";
import { AllAcsComponent } from "./all-acs/all-acs.component";
import { ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { NgxMultipleSelectModule } from "ngx-multiple-select";
import { MaterialModule } from "src/app/core/material-module.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    AcsDetailsComponent,
    AcsIndexComponent,
    CreateAcsComponent,
    AllAcsComponent,
  ],
  imports: [
    CommonModule,
    AcsRoutingModule,
    SharedModule,
    MaterialModule,
    NgxMultipleSelectModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
})
export class AcsModule {}
