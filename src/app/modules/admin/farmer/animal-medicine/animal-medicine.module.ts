import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AnimalMedicineRoutingModule } from "./animal-medicine-routing.module";
import { CreateAnimalMedicineComponent } from "./create-animal-medicine/create-animal-medicine.component";
import { TableAnimalMedicineComponent } from "./table-animal-medicine/table-animal-medicine.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { MaterialModule } from "src/app/core/material-module.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [CreateAnimalMedicineComponent, TableAnimalMedicineComponent],
  imports: [
    CommonModule,
    AnimalMedicineRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AnimalMedicineModule {}
