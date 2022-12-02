import { AnimalBreedingPurposesTableComponent } from './animal-breeding-purposes-table/animal-breeding-purposes-table.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalBreedingPurposesCreateComponent } from './animal-breeding-purposes-create/animal-breeding-purposes-create.component';

const routes: Routes = [ {
  path:'',
  component:AnimalBreedingPurposesTableComponent
}
,{
  path:'crateAnimalBreedingPurposes',
  component:AnimalBreedingPurposesCreateComponent
}
,{
  path:'editAnimalBreedingPurposes/:id',
  component:AnimalBreedingPurposesCreateComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalsPurposesRoutingModule { }
