import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardHeaderComponent } from './card-header/card-header.component';

@NgModule({
  
  imports: [
    CommonModule
  ],
  declarations: [
    CardHeaderComponent
  ],
  exports: [
    CardHeaderComponent
  ]
})
export class CardModule { }
