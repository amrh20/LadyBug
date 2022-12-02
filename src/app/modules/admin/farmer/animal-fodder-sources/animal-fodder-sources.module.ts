import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AnimalFodderSourcesRoutingModule } from "./animal-fodder-sources-routing.module";
import { TableAnimalFodderComponent } from "./table-animal-fodder/table-animal-fodder.component";
import { CreateAnimalFodderComponent } from "./create-animal-fodder/create-animal-fodder.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { MaterialModule } from "src/app/core/material-module.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [TableAnimalFodderComponent, CreateAnimalFodderComponent],
  imports: [
    CommonModule,
    AnimalFodderSourcesRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AnimalFodderSourcesModule {}
