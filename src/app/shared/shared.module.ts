import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SavePathPipe } from './pipes/save-path.pipe';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PopupComponent } from './components/popup/popup.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { TableComponent } from './components/table/table.component';
import { FormsComponent } from './components/forms/forms.component';
import { LibraryModulesModule } from '../core/library-modules.module';
import { MaterialModule } from '../core/material-module.module';
import { HeadNavComponent } from './components/head-nav/head-nav.component';

@NgModule({
  declarations: [
    SavePathPipe,
    SideNavComponent,
    PaginationComponent,
    PopupComponent,
    SpinnerComponent,
    LoadingScreenComponent,
    TableComponent,
    FormsComponent,
    HeadNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    LibraryModulesModule
  ],
  exports:[
    SavePathPipe,
    SideNavComponent,
    PaginationComponent,
    PopupComponent,
    SpinnerComponent,
    LoadingScreenComponent,
    TableComponent,
    FormsComponent,
    HeadNavComponent
  ]
})
export class SharedModule { }
