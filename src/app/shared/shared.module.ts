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
import { PagesHeadComponent } from './components/pages-head/pages-head.component';
import { NumberDirective } from './directives/number.directive';
import { LoadingComponent } from './components/loading/loading.component';

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
    HeadNavComponent,
    PagesHeadComponent,
    NumberDirective,
    LoadingComponent
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
    HeadNavComponent,
    PagesHeadComponent,
    LoadingComponent,
    NumberDirective
  ]
})
export class SharedModule { }
