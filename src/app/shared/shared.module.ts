import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SavePathPipe } from './pipes/save-path.pipe';

@NgModule({
  declarations: [
    SavePathPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
