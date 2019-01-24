import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './buttons/button.module';
import { CardModule } from './card/card.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule
  ],
  exports:[
    ButtonModule,
    CardModule
  ]
})
export class ComponentsModule { }
