import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SeedlingSourcesRoutingModule } from "./seedling-sources-routing.module";
import { TableSeedlingSourcesComponent } from "./table-seedling-sources/table-seedling-sources.component";
import { CreateSeedlingSourcesComponent } from "./create-seedling-sources/create-seedling-sources.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { MaterialModule } from "src/app/core/material-module.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [TableSeedlingSourcesComponent, CreateSeedlingSourcesComponent],
  imports: [
    CommonModule,
    SeedlingSourcesRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SeedlingSourcesModule {}
