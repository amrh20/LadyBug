import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexWrapFarmerComponent } from "./index-wrap-farmer/index-wrap-farmer.component";

const routes: Routes = [
  {
    path: "",
    component: IndexWrapFarmerComponent,
    children: [
    
      {
        path: "farms",
        loadChildren: () =>
          import("./farms/farms.module").then(
            (m) => m.FarmsModule
          ),
      },
      {
        path: "farmedTypes",
        loadChildren: () =>
          import("./farmes-type/farmes-type.module").then(
            (m) => m.FarmesTypeModule
          ),
      },
      //
      {
        path: "plant-illuminating-sources",
        loadChildren: () =>
          import(
            "./plant-illuminating-sources/plant-illuminating-sources.module"
          ).then((m) => m.PlantIlluminatingSourcesModule),
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

      {
        path: "FarmingWays",
        loadChildren: () =>
          import("./farming-ways/farming-ways.module").then(
            (m) => m.FarmingWaysModule
          ),
      },
      {
        path: "FarmingMethods",
        loadChildren: () =>
          import("./farming-methods/farming-methods.module").then(
            (m) => m.FarmingMethodsModule
          ),
      },
      {
        path: "IrrigationMethods",
        loadChildren: () =>
          import("./irrigation-methods/irrigation-methods.module").then(
            (m) => m.IrrigationMethodsModule
          ),
      },
      {
        path: "AnimalBreedingPurposes",
        loadChildren: () =>
          import("./animals-purposes/animals-purposes.module").then(
            (m) => m.AnimalsPurposesModule
          ),
      },
      {
        path: "SoilTypes",
        loadChildren: () =>
          import("./soil-types/soil-types.module").then(
            (m) => m.SoilTypesModule
          ),
      },
      {
        path: "FeedTypes",
        loadChildren: () =>
          import("./feed-types/feed-types.module").then(
            (m) => m.FeedTypesModule
          ),
      },
      {
        path: "TypesSalts",
        loadChildren: () =>
          import("./types-salts/types-salts.module").then(
            (m) => m.TypesSaltsModule
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
