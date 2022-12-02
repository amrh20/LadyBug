import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedTypesRoutingModule } from './feed-types-routing.module';
import { FeedTypessCreateComponent } from './feed-typess-create/feed-typess-create.component';
import { FeedTypessTableComponent } from './feed-typess-table/feed-typess-table.component';
import { MaterialModule } from '../../../../core/material-module.module';
import { SharedModule } from '../../../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FeedTypessCreateComponent,
    FeedTypessTableComponent
  ],
  imports: [
    CommonModule,
    FeedTypesRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FeedTypesModule { }
