import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmerRoutingModule } from './farmer-routing.module';
import { IndexWrapFarmerComponent } from './index-wrap-farmer/index-wrap-farmer.component';

@NgModule({
  declarations: [
    IndexWrapFarmerComponent
  ],
  imports: [
    CommonModule,
    FarmerRoutingModule,

  ]
})
export class FarmerModule { }
