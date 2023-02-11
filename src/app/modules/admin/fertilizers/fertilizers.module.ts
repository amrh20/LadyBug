import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { CrateFertilizersComponent } from './crate-fertilizers/crate-fertilizers.component';
import { DeleteFertilizersComponent } from './delete-fertilizers/delete-fertilizers.component';
import { DetailsFertilizersComponent } from './details-fertilizers/details-fertilizers.component';
import { FertilizersRoutingModule } from './fertilizers-routing.module';
import { IndexFertilizersComponent } from './index-fertilizers/index-fertilizers.component';
import { MaterialModule } from '../../../core/material-module.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { TableFertilizersComponent } from './table-fertilizers/table-fertilizers.component';
import { TranslateModule } from '@ngx-translate/core';
import { KeyValueFilterPipe } from './pipes/key-value-filter.pipe';

@NgModule({
  declarations: [
    TableFertilizersComponent,
    CrateFertilizersComponent,
    DeleteFertilizersComponent,
    IndexFertilizersComponent,
    DetailsFertilizersComponent,
    KeyValueFilterPipe
  ],
  imports: [
    CommonModule,
    FertilizersRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FertilizersModule { }
