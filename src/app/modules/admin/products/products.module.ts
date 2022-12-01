import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CreateZoneComponent } from './zones/create-zone/create-zone.component';
import { TableZoneComponent } from './zones/table-zone/table-zone.component';
import { TableProductComponent } from './products/table-product/table-product.component';
import { TableCityComponent } from './city/table-city/table-city.component';
import { CreateCityComponent } from './city/create-city/create-city.component';
import { ProductWrapComponent } from './product-wrap/product-wrap.component';
import { SharedModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../core/material-module.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingProductComponent } from './products/table-product/components/rating-product/rating-product.component';
import { NgxInputStarRatingModule } from '@ngx-lite/input-star-rating';


@NgModule({
  declarations: [
    CreateZoneComponent,
    TableZoneComponent,
    TableProductComponent,
    TableCityComponent,
    CreateCityComponent,
    ProductWrapComponent,
    RatingProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    MaterialModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgxInputStarRatingModule
  ]
})
export class ProductsModule { }
