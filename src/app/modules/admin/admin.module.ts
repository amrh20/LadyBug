import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    LayoutAdminComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
