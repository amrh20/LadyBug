import { RouterModule, Routes } from "@angular/router";

import { DiseaseRegistrationsTableComponent } from "./pages/disease_registrations/disease-registrations-table/disease-registrations-table.component";
import { DiseaseRegistrationsViewComponent } from "./pages/disease_registrations/disease-registrations-view/disease-registrations-view.component";
import { DiseasesCreateComponent } from "./pages/diseases/diseases-create/diseases-create.component";
import { DiseasesDetailsComponent } from "./pages/diseases/diseases-details/diseases-details.component";
import { DiseasesTableComponent } from "./pages/diseases/diseases-table/diseases-table.component";
import { IndexDiseasesComponent } from "./index-diseases/index-diseases.component";
import { InfectionRatesCreateComponent } from "./pages/infection_rates/infection-rates-create/infection-rates-create.component";
import { InfectionRatesTableComponent } from "./pages/infection_rates/infection-rates-table/infection-rates-table.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: IndexDiseasesComponent,
    children: [
      {
        path: "",
        redirectTo: "/indexDiseases",
        pathMatch: "full",
      },
      { path: "indexDiseases", component: DiseasesTableComponent },
      { path: "edit-Diseases/:id", component: DiseasesCreateComponent },
      { path: "create-Diseases", component: DiseasesCreateComponent },
      { path: "diseases-details/:id", component: DiseasesDetailsComponent },
      {
        path: "diseaseRegistrationsView/:id",
        component: DiseaseRegistrationsViewComponent,
      },

      { path: "InfectionRates", component: InfectionRatesTableComponent },
      {
        path: "edit-InfectionRates/:id",
        component: InfectionRatesCreateComponent,
      },
      {
        path: "create-InfectionRates",
        component: InfectionRatesCreateComponent,
      },
      {
        path: "diseaseRegistrations",
        component: DiseaseRegistrationsTableComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiseasesRoutingModule {}
