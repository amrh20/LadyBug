import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SettingsRoutingModule } from "./settings-routing.module";
import { SettingsComponent } from "./settings/settings.component";
import { AddPriceComponent } from "./add-price/add-price.component";
import { WeatherBackgroundComponent } from "./weather-background/weather-background.component";
import { InfoPdfComponent } from "./info-pdf/info-pdf.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgxMultipleSelectModule } from "ngx-multiple-select";
import { MaterialModule } from "src/app/core/material-module.module";
import { SharedModule } from "src/app/shared/shared.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    SettingsComponent,
    AddPriceComponent,
    WeatherBackgroundComponent,
    InfoPdfComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,
    RouterModule,
    MaterialModule,
    NgxMultipleSelectModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
})
export class SettingsModule {}
