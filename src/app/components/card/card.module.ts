import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardBodyComponent } from './card-body/card-body.component';

@NgModule({
  
  imports: [
    CommonModule
  ],
  declarations: [
    CardHeaderComponent,
    CardBodyComponent,    
  ],
  exports: [
    CardHeaderComponent,
    CardBodyComponent
  ]
})
export class CardModule { }
