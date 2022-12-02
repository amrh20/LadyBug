import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexWrapFarmerComponent } from "./index-wrap-farmer/index-wrap-farmer.component";

const routes: Routes = [
  {
    path: "",
    component: IndexWrapFarmerComponent,
    children: [
      {
        path: "TypeOfCultivar",
        loadChildren: () =>
          import("./type-of-cultivar/type-of-cultivar.module").then(
            (m) => m.TypeOfCultivarModule
          ),
      },
      {
        path: "plant-illuminating-sources",
        loadChildren: () =>
          import(
            "./plant-illuminating-sources/plant-illuminating-sources.module"
          ).then((m) => m.PlantIlluminatingSourcesModule),
      },
      {
        path: "animal_fodder_sources",
        loadChildren: () =>
          import("./animal-fodder-sources/animal-fodder-sources.module").then(
            (m) => m.AnimalFodderSourcesModule
          ),
      },
      {
        path: "chemical-fertilizer-sources",
        loadChildren: () =>
          import(
            "./chemical-fertilizer-sources/chemical-fertilizer-sources.module"
          ).then((m) => m.ChemicalFertilizerSourcesModule),
      },
      {
        path: "seedling_sources",
        loadChildren: () =>
          import("./seedling-sources/seedling-sources.module").then(
            (m) => m.SeedlingSourcesModule
          ),
      },
      {
        path: "animal_medicine",
        loadChildren: () =>
          import("./animal-medicine/animal-medicine.module").then(
            (m) => m.AnimalMedicineModule
          ),
      },
      {
        path: "plant_pot",
        loadChildren: () =>
          import("./plant-pot/plant-pot.module").then((m) => m.PlantPotModule),
      },
      {
        path: "acidity_types",
        loadChildren: () =>
          import("./acidity-types/acidity-types.module").then(
            (m) => m.AcidityTypesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmerRoutingModule {}
