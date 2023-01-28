import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddPriceComponent } from "./add-price/add-price.component";
import { InfoPdfComponent } from "./info-pdf/info-pdf.component";
import { SettingsComponent } from "./settings/settings.component";
import { WeatherBackgroundComponent } from "./weather-background/weather-background.component";

const routes: Routes = [
  { path: "", component: SettingsComponent },
  { path: "report-price", component: AddPriceComponent },
  { path: "weather_background", component: WeatherBackgroundComponent },
  { path: "info_pdf", component: InfoPdfComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
