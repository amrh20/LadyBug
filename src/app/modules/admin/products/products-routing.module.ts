import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductWrapComponent } from './product-wrap/product-wrap.component';
import { TableCityComponent } from './city/table-city/table-city.component';
import { CreateCityComponent } from './city/create-city/create-city.component';
import { CreateZoneComponent } from './zones/create-zone/create-zone.component';
import { TableZoneComponent } from './zones/table-zone/table-zone.component';
import { TableProductComponent } from './products/table-product/table-product.component';

const routes: Routes = [
  {
    path:'',
    component:ProductWrapComponent,
    children:[
      {
        path:'cities',
        component:TableCityComponent
      },
      {
        path:'cityCreate',
        component:CreateCityComponent
      },
      {
        path:'cityEdit/:id',
        component:CreateCityComponent
      },
      
      {
        path:'zones',
        component:TableZoneComponent
      },
      {
        path:'zonesCreate',
        component:CreateZoneComponent
      },
      {
        path:'zonesEdit/:id',
        component:CreateZoneComponent
      },
     {
      path:'Products',
      component :TableProductComponent
     }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
