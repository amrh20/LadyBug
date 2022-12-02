import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsPurposesRoutingModule } from './animals-purposes-routing.module';
import { AnimalBreedingPurposesTableComponent } from './animal-breeding-purposes-table/animal-breeding-purposes-table.component';
import { AnimalBreedingPurposesCreateComponent } from './animal-breeding-purposes-create/animal-breeding-purposes-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../../../shared/shared.module';
import { MaterialModule } from '../../../../core/material-module.module';


@NgModule({
  declarations: [
    AnimalBreedingPurposesTableComponent,
    AnimalBreedingPurposesCreateComponent
  ],
  imports: [
    CommonModule,
    AnimalsPurposesRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AnimalsPurposesModule { }
