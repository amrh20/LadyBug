import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Interceptors } from './core/interceptor/interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotToastModule } from '@ngneat/hot-toast';
import { MaterialModule } from './core/material-module.module';
import { LibraryModulesModule } from './core/library-modules.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HotToastModule.forRoot(),
    MaterialModule,
    LibraryModulesModule
  ],
  providers: [Interceptors],
  bootstrap: [AppComponent]
})
export class AppModule { }
