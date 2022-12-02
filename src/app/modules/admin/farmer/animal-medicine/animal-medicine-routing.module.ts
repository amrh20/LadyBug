import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateAnimalMedicineComponent } from "./create-animal-medicine/create-animal-medicine.component";
import { TableAnimalMedicineComponent } from "./table-animal-medicine/table-animal-medicine.component";

const routes: Routes = [
  {
    path: "",
    component: TableAnimalMedicineComponent,
  },
  {
    path: "CreateAnimalMedicine",
    component: CreateAnimalMedicineComponent,
  },
  {
    path: "editAnimalMedicine/:id",
    component: CreateAnimalMedicineComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalMedicineRoutingModule {}
