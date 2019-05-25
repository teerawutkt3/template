import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardHeaderComponent } from './card-header/card-header.component';
import { Card2Component } from './card2/card2.component';

@NgModule({

  imports: [
    CommonModule
  ],
  declarations: [
    CardHeaderComponent,
    Card2Component,
  ],
  exports: [
    Card2Component,
    CardHeaderComponent,
  ]
})
export class CardModule { }
