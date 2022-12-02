import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateAnimalFodderComponent } from "./create-animal-fodder/create-animal-fodder.component";
import { TableAnimalFodderComponent } from "./table-animal-fodder/table-animal-fodder.component";

const routes: Routes = [
  {
    path: "",
    component: TableAnimalFodderComponent,
  },
  {
    path: "CreateAnimalFodder",
    component: CreateAnimalFodderComponent,
  },
  {
    path: "editAnimalFodder/:id",
    component: CreateAnimalFodderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalFodderSourcesRoutingModule {}
