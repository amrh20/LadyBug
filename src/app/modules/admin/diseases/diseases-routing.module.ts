import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexDiseasesComponent } from './index-diseases/index-diseases.component';
import { DiseasesTableComponent } from './pages/diseases/diseases-table/diseases-table.component';
import { DiseasesCreateComponent } from './pages/diseases/diseases-create/diseases-create.component';
import { DiseasesDetailsComponent } from './pages/diseases/diseases-details/diseases-details.component';
import { InfectionRatesTableComponent } from './pages/infection_rates/infection-rates-table/infection-rates-table.component';
import { InfectionRatesCreateComponent } from './pages/infection_rates/infection-rates-create/infection-rates-create.component';
import { DiseaseRegistrationsTableComponent } from './pages/disease_registrations/disease-registrations-table/disease-registrations-table.component';

const routes: Routes = [
  {
    path:'',
    component:IndexDiseasesComponent,
    children:[
      {
        path:'',
        redirectTo:'/indexDiseases',
        pathMatch:'full'
      },
      { path: 'indexDiseases', component: DiseasesTableComponent },
      { path: 'edit-Diseases/:id', component: DiseasesCreateComponent },
      { path: 'create-Diseases', component:  DiseasesCreateComponent},
      { path: 'Diseases/:id',component: DiseasesDetailsComponent },
      { path: 'InfectionRates', component: InfectionRatesTableComponent },
      { path: 'edit-InfectionRates/:id', component: InfectionRatesCreateComponent },
      { path: 'create-InfectionRates', component:  InfectionRatesCreateComponent},
      {
        path:'diseaseRegistrations',
        component:DiseaseRegistrationsTableComponent
      }
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiseasesRoutingModule { }
