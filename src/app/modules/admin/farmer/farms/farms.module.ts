import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CommonModule } from "@angular/common";
import { FarmsDetailsComponent } from "./farms-details/farms-details.component";
import { FarmsRoutingModule } from "./farms-routing.module";
import { FarmsTableComponent } from "./farms-table/farms-table.component";
import { MaterialModule } from "../../../../core/material-module.module";
import { NgModule } from "@angular/core";
import { NgxInputStarRatingModule } from '@ngx-lite/input-star-rating';
import { RateFarmsComponent } from './components/rate-farms/rate-farms.component';
import { SharedModule } from "../../../../shared/shared.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [FarmsTableComponent, FarmsDetailsComponent, RateFarmsComponent],
  imports: [
    CommonModule,
    FarmsRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgxInputStarRatingModule
  ],
})
export class FarmsModule {}
